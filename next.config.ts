import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The product canon lives in docs/ and CLAUDE_HANDOFF.md; don't let the
  // framework write its own agent instruction files into the repository root.
  agentRules: false,
  // The dev overlay sits on top of the hero's secondary action; hide it so what
  // is reviewed locally matches what ships.
  devIndicators: false,
};

export default nextConfig;
