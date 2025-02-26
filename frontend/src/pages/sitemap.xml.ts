import { GetServerSideProps, NextPage } from 'next';
import { PostType } from "@/models/pages/slug";
import getMarkdownAllPosts from "@/utils/markDown/getMarkdownAllPosts";

const Sitemap: NextPage = () => null;

const generateSiteMap = (postList: PostType[]) => {
    const baseUrl = 'https://baakhan.com';

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${postList
            .map(post => `
                <url>
                    <loc>${baseUrl}/posts/${post.slug}</loc>
                    <lastmod>${new Date(post.regDate).toISOString()}</lastmod>
                    <priority>0.8</priority>
                </url>
            `)
            .join('')}
    </urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const { postList } = await getMarkdownAllPosts();
    const sitemap = generateSiteMap(postList);

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return { props: {} };
};

export default Sitemap;
