const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

/** @type {import('next').NextConfig} */
module.exports = {
	experimental: {
		scrollRestoration: true,
		esmExternals: false,
	},
	reactStrictMode: false,
	trailingSlash: true,
	productionBrowserSourceMaps: true,
	images: {
		domains: ['d2ut7x8yqv441q.cloudfront.net'],
	},
	webpack: config => {
		config.plugins.push(new CaseSensitivePathsPlugin());
		return config;
	},
	rewrites() {
		return [
			{
				source: '/sitemap.xml',
				destination: '/api/sitemap',
			},
			{
				source: '/rss.xml',
				destination: '/api/rss',
			},
		];
	},
};
