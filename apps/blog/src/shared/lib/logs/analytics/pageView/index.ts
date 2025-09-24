import { trackAboutView } from './about';
import { trackBlogView } from './blog';
import { trackPostDetailView } from './postDetail';
import { trackPostListView } from './postList';

export const pageView = {
	blog: trackBlogView,
	postDetail: trackPostDetailView,
	postList: trackPostListView,
	about: trackAboutView,
};
