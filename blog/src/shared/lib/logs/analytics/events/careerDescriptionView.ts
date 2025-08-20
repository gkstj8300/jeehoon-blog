import { sendEvent } from './sendEvent';

type CareerDescriptionView = {
	event: 'CareerDescriptionView';
	ga_eventType: string;
	ga_layout: string;
};

export const careerDescriptionView = (layout: string) => {
	sendEvent<CareerDescriptionView>({
		event: 'CareerDescriptionView',
		ga_eventType: 'Click',
		ga_layout: layout,
	});
};
