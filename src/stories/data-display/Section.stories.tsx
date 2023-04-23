import type { Meta, StoryObj } from '@storybook/react'
import Section from '../../components/data-display/Section'
import React from 'react'

const meta: Meta<typeof Section> = {
	title: 'Generic/Section',
	component: Section,
	args: {
		sectionName: 'Content',
		children: (
			<div>
				<p>This is the content</p>
			</div>
		),
	},
}
export default meta

type Story = StoryObj<typeof Section>

export const Default: Story = {}
