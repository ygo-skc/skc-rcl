import type { Meta, StoryObj } from '@storybook/react'
import DatedListItem from '../../components/data-display/DatedListItem'
import React, { Fragment } from 'react'

const meta: Meta<typeof DatedListItem> = {
	title: 'Lists/Dated List Item',
	component: DatedListItem,
	args: {
		link: '',
		month: 'Aug',
		day: 25,
		year: 1993,
		children: (
			<Fragment>
				<h1>Birthday</h1>
				<h3>Date of Birth</h3>
				<p>The Best Day Ever</p>
			</Fragment>
		),
	},
}
export default meta

type Story = StoryObj<typeof DatedListItem>

export const BadgeVariant: Story = {}

export const InlineVariant: Story = {
	args: {
		variant: 'inline',
		children: <p>The Best Day Ever</p>,
	},
}
