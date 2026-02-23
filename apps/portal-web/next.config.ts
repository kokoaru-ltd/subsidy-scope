import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/subsidy-scope" : "",
  assetPrefix: isGitHubPages ? "/subsidy-scope/" : "",
  transpilePackages: ["@subsidy-scope/ui", "@subsidy-scope/api", "@subsidy-scope/db"],
  experimental: { optimizePackageImports: ["@subsidy-scope/ui", "motion", "recharts"] },
};
export default config;
