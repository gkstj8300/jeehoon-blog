import { trackAboutView } from "./about"
import { trackHomeView } from "./home"
import { trackPostDetailView } from "./postDetail"
import { trackPostListView } from "./postList"

export const pageView = {
    home: trackHomeView,
    postDetail: trackPostDetailView,
    postList: trackPostListView,
    about: trackAboutView,
}