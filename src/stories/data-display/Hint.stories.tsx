import type { Meta, StoryObj } from '@storybook/react'
import Hint from '../../components/data-display/Hint'

const meta: Meta<typeof Hint> = {
	title: 'Generic/Hint',
	component: Hint,
	args: {
		children: 'No Content To Show',
	},
}
export default meta

type Story = StoryObj<typeof Hint>

export const Default: Story = {}
export const Tight: Story = {
	args: {
		variant: 'tight',
	},
}
export const NonFullWidth: Story = {
	args: {
		variant: 'tight',
		fullWidth: false,
	},
}
