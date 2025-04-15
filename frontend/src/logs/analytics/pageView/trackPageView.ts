import { routerHistory } from '@/utils/routerHistory';

export async function tractPageView() {
	window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
		event: 'gaDisplay',
		dl_referrer: routerHistory.getReferrer(),
        ga_eventType: window.ga_eventType,
        ga_layout: window.ga_layout,
        ga_post_title: window.ga_post_title,
        ga_post_regDate: window.ga_post_regDate,
        ga_post_mainTag: window.ga_post_mainTag,
	});
}
