import type { Meta, StoryObj } from '@storybook/react'
import DateBadge from '../../components/data-display/DateBadge'

const meta: Meta<typeof DateBadge> = {
	title: 'Generic/Date Badge',
	component: DateBadge,
	args: {
		month: 'Jan',
		day: 25,
		year: 2023,
	},
}
export default meta

type Story = StoryObj<typeof DateBadge>

export const Default: Story = {}

export const Condensed: Story = {
	args: {
		variant: 'condensed',
	},
}
