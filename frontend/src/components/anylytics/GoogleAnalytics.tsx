import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { tractPageView } from "@/logs/analytics/pageView/trackPageView";

export const GoogleAnalytics = () => {
    const [initialized, setInitialized] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            ReactGA.initialize(`G-X0B60TJJVS`);
        }
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
            tractPageView(router.pathname);
        }
    }, [initialized, router]);

    return null;
};
GoogleAnalytics.displayName = 'GoogleAnalytics';