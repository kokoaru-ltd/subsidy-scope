import type { NextConfig } from "next";
const config: NextConfig = {
  transpilePackages: ["@subsidy-scope/ui", "@subsidy-scope/api", "@subsidy-scope/db"],
  experimental: { optimizePackageImports: ["@subsidy-scope/ui", "motion", "recharts"] },
};
export default config;
