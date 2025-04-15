import { tractPageView } from "./trackPageView";
import { clearVariables } from "@/logs/analytics/clearVariables";

type Payload = {
    title: string,
    regDate: string,
    mainTag: string,
}

export const trackPostDetailView = async (payload: Payload) => {
    await setVariables(payload);
    tractPageView();
}

export const setVariables = async (payload: Payload) => {
    clearVariables();
    window.ga_eventType = 'PageView';
    window.ga_layout = 'PostDetail Page';
    window.ga_post_title = payload.title;
    window.ga_post_regDate = payload.regDate;
    window.ga_post_mainTag = payload.mainTag;
}