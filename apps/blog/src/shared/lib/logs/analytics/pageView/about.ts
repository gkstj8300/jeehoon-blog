import { tractPageView } from './trackPageView';
import { clearVariables } from '@/shared/lib/logs/analytics/clearVariables';

export const trackAboutView = async () => {
	await setVariables();
	tractPageView();
};

export const setVariables = async () => {
	clearVariables();
	window.ga_eventType = 'PageView';
	window.ga_layout = 'About Page';
};
