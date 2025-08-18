import getMarkdownPost from '@/entities/post/api/getMarkdownPost';
import PostDetailPage from '@/features/postDetail/ui/PostDetailPage';

interface PostDetailProps {
	params: Promise<{ slug: string }>;
}

export default async function PostDetail({ params }: PostDetailProps) {
	const { slug } = await params;
	const post = await getMarkdownPost(slug);

	return <PostDetailPage {...post} />;
}
