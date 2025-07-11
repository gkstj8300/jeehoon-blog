import Script from 'next/script';
import { useEffect, useRef } from 'react';

export const GoogleAnalytics = () => {
    const initialized = useRef(false);
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

    useEffect(() => {
        if (initialized.current === false) {
			/* eslint-disable */
			// prettier-ignore
			// @ts-ignore
			(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-5R587KL8');
			/* eslint-enable */

			initialized.current = true;
		}
    }, []);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
            />
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>
        </>
    );
};
GoogleAnalytics.displayName = 'GoogleAnalytics';