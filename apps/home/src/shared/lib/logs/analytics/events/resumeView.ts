import { sendEvent } from './sendEvent';

type ResumeView = {
	event: 'ResumeView';
	ga_eventType: string;
	ga_layout: string;
};

export const resumeView = () => {
	sendEvent<ResumeView>({
		event: 'ResumeView',
		ga_eventType: 'Click',
		ga_layout: 'Main',
	});
};
