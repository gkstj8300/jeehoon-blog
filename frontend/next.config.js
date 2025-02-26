const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

/** @type {import('next').NextConfig} */
module.exports = {
	experimental: {
		scrollRestoration: true,
		esmExternals: false,
	},
	reactStrictMode: false,
	trailingSlash: true,
	webpack: config => {
		config.plugins.push(new CaseSensitivePathsPlugin());
		return config;
	},
	rewrites() {
		return [
			{
				source: "/sitemap.xml",
				destination: "/api/sitemap",
			},
		];
	},
};