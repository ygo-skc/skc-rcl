import React from 'react'

import DateComponent from '../components/generic/DateComponent'

const Template = (args) => <DateComponent {...args} />

export default {
	title: 'Generic/DateComponent',
	component: DateComponent,
}

export const Default = Template.bind({})
Default.args = {
	date: new Date(),
}
