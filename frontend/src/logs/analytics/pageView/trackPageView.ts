import ReactGA from 'react-ga4';
import { routerHistory } from '@/utils/routerHistory';

export async function tractPageView(location: string) {
    ReactGA.send({
        hitType: 'gaPageview',
        page: location,
		dl_referrer: routerHistory.getReferrer(),
    });
}
