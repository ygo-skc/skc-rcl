module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-mdx-gfm'],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	typescript: {
		reactDocgen: false,
	},
	docs: {
		autodocs: true,
	},
}
