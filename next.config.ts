import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The product canon lives in docs/ and CLAUDE_HANDOFF.md; don't let the
  // framework write its own agent instruction files into the repository root.
  agentRules: false,
};

export default nextConfig;
