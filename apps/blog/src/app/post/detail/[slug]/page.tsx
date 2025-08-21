import type { Metadata } from 'next'
import getMarkdownPost from '@/entities/post/api/getMarkdownPost';
import PostDetailPage from '@/features/postDetail/ui/PostDetailPage';

interface PostDetailProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostDetailProps): Promise<Metadata> {
	const { slug } = await params;
	const post = await getMarkdownPost(slug);

	return {
		title: `${post.title} | Baakhan`,
		description: post.description,
		keywords: post.mainTag,
		alternates: { canonical: '/' },
		openGraph: {
			url: `https://baakhan.com/posts/${post.slug}`,
			type: 'website',
			siteName: `${post.title} | Baakhan`,
			title: `${post.title} | Baakhan`,
			description: post.description,
			images: [
				{
					url: post.thumbnailImage,
					width: 1200,
					height: 630,
					alt: 'Baakhan',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: `${post.title} | Baakhan`,
			description: post.description,
			images: [post.thumbnailImage],
			site: '@Baakhan',
		},
	}
}

export default async function PostDetail({ params }: PostDetailProps) {
	const { slug } = await params;
	const post = await getMarkdownPost(slug);

	return <PostDetailPage {...post} />;
}
