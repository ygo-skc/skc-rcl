module.exports = {
	stories: ["../src/**/*.stories.@(ts|tsx)"],
	addons: ['@storybook/addon-essentials', "@storybook/addon-webpack5-compiler-babel"],
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
