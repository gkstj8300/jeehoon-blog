import { useEffect, useRef } from 'react';

export const GoogleAnalytics = () => {
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current === false) {
			/* eslint-disable */
			// prettier-ignore
			// @ts-ignore
			(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-5R587KL8');
			/* eslint-enable */

			initialized.current = true;
		}
    }, []);

    return (
        <noscript>
            <iframe
                src="//www.googletagmanager.com/ns.html?id=GTM-5R587KL8"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
    );
};
GoogleAnalytics.displayName = 'GoogleAnalytics';