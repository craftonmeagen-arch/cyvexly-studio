import http from "node:http";

const listenPort = Number(process.env.PREVIEW_PORT ?? 5181);
const target = new URL(process.env.TARGET_URL ?? "http://127.0.0.1:5173");
const confirmationSent = process.env.CONFIRMATION_SENT === "true";

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url ?? "/", `http://127.0.0.1:${listenPort}`);
  if (
    request.method === "POST" &&
    (requestUrl.pathname === "/api/contact" || requestUrl.pathname === "/api/planner")
  ) {
    request.resume();
    response.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    });
    response.end(JSON.stringify({ ok: true, confirmationSent }));
    return;
  }

  const proxyRequest = http.request(
    {
      protocol: target.protocol,
      hostname: target.hostname,
      port: target.port,
      method: request.method,
      path: request.url,
      headers: { ...request.headers, host: target.host },
    },
    (proxyResponse) => {
      response.writeHead(proxyResponse.statusCode ?? 502, proxyResponse.headers);
      proxyResponse.pipe(response);
    },
  );
  proxyRequest.on("error", (error) => {
    response.writeHead(502, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(`Local receipt preview proxy failed: ${error.message}`);
  });
  request.pipe(proxyRequest);
});

server.listen(listenPort, "127.0.0.1", () => {
  console.log(
    `Receipt preview listening on http://127.0.0.1:${listenPort} (confirmationSent=${confirmationSent})`,
  );
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
