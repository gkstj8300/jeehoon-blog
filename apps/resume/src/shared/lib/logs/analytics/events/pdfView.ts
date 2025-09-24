import { sendEvent } from './sendEvent';

type PdfView = {
	event: 'PdfView';
	ga_eventType: string;
	ga_layout: string;
};

export const pdfView = () => {
	sendEvent<PdfView>({
		event: 'PdfView',
		ga_eventType: 'Click',
		ga_layout: 'Resume',
	});
};
