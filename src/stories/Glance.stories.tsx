import React from 'react'

import Glance from '../components/generic/Glance'

const Template = (args) => <Glance {...args} />

export default {
	title: 'Generic/Glance',
	component: Glance,
}

export const Default = Template.bind({})
Default.args = {
	total: 30,
	subject: 'XXX',
	color: 'purple',
	action: () => {
		console.log('glance pressed')
	},
}
