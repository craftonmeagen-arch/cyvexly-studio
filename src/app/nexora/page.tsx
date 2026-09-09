import type { Metadata } from "next";
import { NexoraDemo } from "@/components/nexora-demo";

export const metadata: Metadata = {
  title: "Nexora Systems — Interactive Product Demo",
  description:
    "A fictional, interactive release-intelligence product demonstration built by Cyvexly Studio.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/nexora" },
};

export default function NexoraPage() {
  return <NexoraDemo />;
}
