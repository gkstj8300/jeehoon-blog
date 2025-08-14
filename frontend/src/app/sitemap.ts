import { MetadataRoute } from "next";
import getMarkdownAllPosts from "@/utils/markDown/getMarkdownAllPosts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.baakhan.com";
  const { postList } = await getMarkdownAllPosts();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...postList.map(post => ({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: new Date(post.regDate),
      priority: 0.8,
    })),
  ];
}