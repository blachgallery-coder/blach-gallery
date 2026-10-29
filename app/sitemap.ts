import type { MetadataRoute } from "next";
import { blogPosts, themePages } from "@/lib/data";

const baseUrl = "https://www.blachgallery.com";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/shop",
    "/artistes-du-collectif",
    "/expositions",
    "/newsletter",
    "/atelier-graffiti",
    "/bio-contact",
    "/blog",
    "/encheres-de-la-semaine",
    "/performances-artistiques"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now
  }));

  const themeEntries = themePages.map((theme) => ({
    url: `${baseUrl}/theme/${theme.slug}`,
    lastModified: now
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now
  }));

  return [...staticPages, ...themeEntries, ...blogEntries];
}
