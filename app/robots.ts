import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    host: "https://www.blachgallery.com",
    sitemap: "https://www.blachgallery.com/sitemap.xml"
  };
}
