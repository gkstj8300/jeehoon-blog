export const GoogleAnalytics: React.FC = () => {

	return (
        // Google Tag Manager (noscript)
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