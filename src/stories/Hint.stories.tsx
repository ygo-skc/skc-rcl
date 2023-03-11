import React from 'react'

import Hint from '../components/generic/Hint'

const Template = (args) => <Hint {...args} />

export default {
	title: 'Generic/Hint',
	component: Hint,
}

export const Default = Template.bind({})
Default.args = {
	children: <p>yooo</p>,
}
