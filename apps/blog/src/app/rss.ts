import { NextApiRequest, NextApiResponse } from "next";
import getMarkdownAllPosts from "@/entities/post/api/getMarkdownAllPosts";
import { PostType } from "@/shared/types/slug";

const generateRssFeed = (postList: PostType[]) => {
    const baseUrl = "https://blog.baakhan.com";

    return `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
        <channel>
            <title>박지훈 기술 블로그</title>
            <link>${baseUrl}</link>
            <description>박지훈 기술 블로그</description>
            <language>ko</language>
            ${postList
                .map(post => `
                    <item>
                        <title>${post.title}</title>
                        <link>${baseUrl}/posts/${post.slug}</link>
                        <description>${post.description || ""}</description>
                        <pubDate>${new Date(post.regDate).toUTCString()}</pubDate>
                    </item>
                `)
                .join("")}
        </channel>
    </rss>`;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { postList } = await getMarkdownAllPosts();
    const rss = generateRssFeed(postList);

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(rss);
}
