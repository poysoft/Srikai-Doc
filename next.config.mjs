/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  assetPrefix: ".",
  // assetPrefix: "/Srikai-Doc",
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: "docs",
  // basePath: "/Srikai-Doc",
  basePath: "/Srikai-Doc",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
