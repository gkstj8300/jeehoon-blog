import { MetadataRoute } from "next";
import getMarkdownAllPosts from "@/entities/post/api/getMarkdownAllPosts"; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.SITE_URL ?? "https://blog.baakhan.com";
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