import React from 'react'

import Hint from '../components/generic/Hint'

const Template = (args) => <Hint {...args} />

export default {
	title: 'Generic/Hint',
	component: Hint,
}

export const Default = Template.bind({})
Default.args = {
	children: 'No Content To Show',
}

export const Tight = Template.bind({})
Tight.args = {
	children: 'No Content To Show',
	variant: 'tight',
}

export const NonFullWidth = Template.bind({})
NonFullWidth.args = {
	children: 'No Content To Show',
	variant: 'tight',
	fullWidth: false,
}
