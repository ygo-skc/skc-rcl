import React from 'react'

import Section, { SectionProps } from '../components/generic/Section'

const Template = (args: SectionProps) => <Section {...args} />

export default {
	title: 'Generic/Section',
	component: Section,
}

export const Default = Template.bind({})
Default.args = {
	sectionName: 'Content',
	sectionContent: (
		<div>
			<p>This is the content</p>
		</div>
	),
}
