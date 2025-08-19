import getMarkdownAllPosts from '@/entities/post/api/getMarkdownAllPosts';
import PostListPage from '@/features/postList/ui/PostListPage';

export default async function PostList() {
	const { postList } = await getMarkdownAllPosts();

	return <PostListPage postList={postList} />;
}
