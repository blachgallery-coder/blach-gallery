/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      { source: "/fresque-graffiti", destination: "https://www.maxletagueur.com", permanent: false },
      { source: "/artistes", destination: "/artistes-du-collectif", permanent: true },
      { source: "/blog-fluxus", destination: "/expositions", permanent: true }
    ];
  }
};

export default nextConfig;
