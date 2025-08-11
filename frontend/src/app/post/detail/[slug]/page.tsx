import PostDetailPage from '@/components/pages/postDetail/Page';
import getMarkdownPost from '@/utils/markDown/getMarkdownPost';

interface PostDetailProps {
	params: Promise<{ slug: string }>;
}

export default async function PostDetail({ params }: PostDetailProps) {
	const { slug } = await params;
	const post = await getMarkdownPost(slug);

	return <PostDetailPage {...post} />;
}
