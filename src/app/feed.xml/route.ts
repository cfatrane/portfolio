import assert from "assert";

import * as cheerio from "cheerio";
import { Feed } from "feed";

export async function GET(req: Request) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    throw Error("Missing NEXT_PUBLIC_SITE_URL environment variable");
  }

  const author = {
    name: "Charles-Edouard Fatrane",
    email: "cfatrane.pro@gmail.com",
  };

  const feed = new Feed({
    title: author.name,
    description: "Your blog description",
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  });

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      "content-type": "application/xml",
      "cache-control": "s-maxage=31556952",
    },
  });
}
