import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AGENTS.md in this sandbox is Owner-authored role-system guidance;
  // Next.js must never append its own agent-rules block to it.
  agentRules: false,
};

export default nextConfig;
