import ReactGA from 'react-ga4';
import { routerHistory } from '@/utils/routerHistory';

export async function tractPageView() {
	window.dataLayer = window.dataLayer || [];
    // ReactGA.send({
    //     hitType: 'pageview',
    //     page: location,
	// 	dl_referrer: routerHistory.getReferrer(),
    // });
    window.dataLayer.push({
		event: 'gaDisplay',
		dl_referrer: routerHistory.getReferrer(),
	});
}
