module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
	addons: ['@storybook/addon-essentials'],
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
