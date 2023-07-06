import type { Meta, StoryObj } from '@storybook/react'
import InlineDate from '../../components/data-display/InlineDate'

const meta: Meta<typeof InlineDate> = {
	title: 'Generic/Inline Date',
	component: InlineDate,
	args: {
		month: 'Jan',
		day: 25,
		year: 2023,
	},
}
export default meta

type Story = StoryObj<typeof InlineDate>

export const Default: Story = {}
