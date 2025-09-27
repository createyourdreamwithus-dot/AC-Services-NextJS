// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.acservices.info";

  // List all your URLs here
  const urls = [
    {
      loc: baseUrl,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1,
    },
    // Add more URLs here
  ];

  // Build XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `<url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>`
      )
      .join("")}
  </urlset>`;

  // Return XML response with proper headers
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "text/xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}
