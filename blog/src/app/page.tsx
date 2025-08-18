import getMarkdownAllPosts from '@/entities/post/api/getMarkdownAllPosts';
import HomePage from '@/features/home/ui/HomePage';

export default async function Home() {
	const { postList } = await getMarkdownAllPosts();

	return <HomePage postList={postList} />;
}
