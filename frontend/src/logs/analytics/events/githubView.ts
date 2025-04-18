import { sendEvent } from "./sendEvent";

type GithubView = {
    event: 'GithubView',
    ga_eventType: string,
    ga_layout: string,
}

export const githubView = (layout: string) => {
    sendEvent<GithubView>({
        event: 'GithubView',
        ga_eventType: 'Click',
        ga_layout: layout,
    });    
}