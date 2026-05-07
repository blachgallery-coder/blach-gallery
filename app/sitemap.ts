import type { MetadataRoute } from "next";
import { blogPosts, themePages } from "@/lib/data";

const baseUrl = "https://www.blachgallery.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/shop", "/artistes", "/performances-artistiques", "/blog"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));

  const themeEntries = themePages.map((theme) => ({
    url: `${baseUrl}/theme/${theme.slug}`,
    lastModified: new Date()
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date()
  }));

  return [...staticPages, ...themeEntries, ...blogEntries];
}
