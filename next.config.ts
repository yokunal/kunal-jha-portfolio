import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/kunal-jha-portfolio" : "",
  assetPrefix: isGithubPages ? "/kunal-jha-portfolio" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
