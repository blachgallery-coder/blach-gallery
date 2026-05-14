import type { MetadataRoute } from "next";
import { blogPosts, themePages } from "@/lib/data";

const baseUrl = "https://www.blachgallery.com";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/shop",
    "/artistes",
    "/artistes-du-collectif",
    "/atelier-graffiti",
    "/bio-contact",
    "/blog",
    "/blog-fluxus",
    "/encheres-de-la-semaine",
    "/fresque-graffiti",
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
