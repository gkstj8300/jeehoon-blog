import { sendEvent } from './sendEvent';

type GithubView = {
	event: 'GithubView';
	ga_eventType: string;
	ga_layout: string;
};

export const githubView = () => {
	sendEvent<GithubView>({
		event: 'GithubView',
		ga_eventType: 'Click',
		ga_layout: 'Main',
	});
};
