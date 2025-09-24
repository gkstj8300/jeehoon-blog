export const sendEvent = <T extends object>(event: T) => {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(event);
};
