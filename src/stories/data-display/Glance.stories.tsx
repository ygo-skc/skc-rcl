import React from 'react'

import Glance, { GlanceProps } from '../../components/data-display/Glance'

const Template = (args: GlanceProps) => <Glance {...args} />

export default {
	title: 'Generic/Glance',
	component: Glance,
}

export const Small = Template.bind({})
Small.args = {
	total: 30,
	subject: 'Cards',
	color: 'purple',
	action: () => {
		console.log('glance pressed')
	},
	variant: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
	total: 30,
	subject: 'Ban Lists',
	color: 'purple',
	action: () => {
		console.log('glance pressed')
	},
	variant: 'medium',
}

export const Large = Template.bind({})
Large.args = {
	total: 30,
	subject: 'Effected Countries',
	color: 'purple',
	action: () => {
		console.log('glance pressed')
	},
	variant: 'large',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
	total: 30,
	subject: 'Active Members Currently Online',
	color: 'purple',
	action: () => {
		console.log('glance pressed')
	},
	variant: 'full-width',
}
