import { sendEvent } from "./sendEvent";
import { PostType } from "@/models/pages/slug"

type SelectedPost = {
    event: 'SelectPost';
    ga_eventType: string,
    ga_layout: string,
    ga_post_title: string,
    ga_post_regDate: string,
    ga_post_mainTag: string,
}

export const selectPost = (post: PostType, layout: string) => {
    const { title, regDate, mainTag } = post;
    
    sendEvent<SelectedPost>({
        event: 'SelectPost',
        ga_eventType: 'Click',
        ga_layout: layout,
        ga_post_title: title,
        ga_post_regDate: regDate,
        ga_post_mainTag: mainTag,
    });
}