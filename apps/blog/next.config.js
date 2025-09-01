const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

/** @type {import('next').NextConfig} */
module.exports = {
	experimental: {
		scrollRestoration: true,
		esmExternals: false,
	},
	transpilePackages: ["@jeehoon/hooks", "@jeehoon/theme", "@jeehoon/utils", "@jeehoon/ui"],
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
};
