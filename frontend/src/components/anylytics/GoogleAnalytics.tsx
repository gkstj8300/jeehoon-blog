import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const GoogleAnalytics = () => {

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            ReactGA.initialize(`GTM-5R587KL8`);
        }
    }, []);

    return null;
};
GoogleAnalytics.displayName = 'GoogleAnalytics';