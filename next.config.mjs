/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.mdx/,
			use: [
				options.defaultLoaders.babel,
				{
					loader: '@mdx-js/loader',
					options: {},
				},
			],
		});

		return config;
	},
};

export default nextConfig;
