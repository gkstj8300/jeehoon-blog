import { PostType } from "@/types/slug";
import getMarkdownAllPosts from "@/utils/markDown/getMarkdownAllPosts";

export const runtime = "nodejs";
export const revalidate = 3600;

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.baakhan.com";
const FEED_URL = `${BASE_URL}/rss.xml`;
const FEED_TITLE = "박지훈 기술 블로그";
const FEED_DESC = "박지훈 기술 블로그";
const FEED_LANG = "ko";
const MAX_ITEMS = 50;

function inferMimeFromExt(url?: string): string | undefined {
  if (!url) return;
  const lower = url.toLowerCase();
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".gif")) return "image/gif";
  return undefined;
}

function toAbs(u?: string): string | undefined {
  if (!u) return;
  return u.startsWith("http") ? u : `${BASE_URL}${u}`;
}

export async function GET() {
  const RSS = (await import("rss")).default;
  const { postList } = await getMarkdownAllPosts();

  const items = [...(postList as PostType[])]
    .sort(
      (a, b) =>
        new Date(b.regDate).getTime() - new Date(a.regDate).getTime()
    )
    .slice(0, MAX_ITEMS);

  const lastBuild = items[0] ? new Date(items[0].regDate) : new Date();

  const feed = new RSS({
    title: FEED_TITLE,
    description: FEED_DESC,
    site_url: BASE_URL,
    feed_url: FEED_URL,
    language: FEED_LANG,
    pubDate: lastBuild,
    custom_namespaces: {
      atom: "http://www.w3.org/2005/Atom",
      content: "http://purl.org/rss/1.0/modules/content/",
    },
    custom_elements: [
      {
        "atom:link": {
          _attr: {
            href: FEED_URL,
            rel: "self",
            type: "application/rss+xml",
          },
        },
      },
      { lastBuildDate: lastBuild.toUTCString() },
      { ttl: 60 },
    ],
  });

  items.forEach((p) => {
    const url = `${BASE_URL}/posts/${p.slug}`;
    const thumbAbs = toAbs(p.thumbnailImage);
    const mime = inferMimeFromExt(thumbAbs);

    feed.item({
      title: p.title || p.slug,
      description: p.description || "",
      url,
      guid: url,
      date: new Date(p.regDate),
      categories: p.tags || [],
      enclosure: thumbAbs && mime ? { url: thumbAbs, type: mime } : undefined,
    });
  });

  const xml = feed.xml({ indent: true });

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=60",
    },
  });
}
