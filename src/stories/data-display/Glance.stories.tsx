import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Glance from '../../components/data-display/Glance'

const meta: Meta<typeof Glance> = {
	title: 'Generic/Glance',
	component: Glance,
	args: {
		total: 30,
		subject: 'Active Members Currently Online',
		color: 'purple',
		action: action('Clicked!'),
	},
}
export default meta

type Story = StoryObj<typeof Glance>

export const Small: Story = {
	args: {
		variant: 'small',
	},
}
export const Medium: Story = {
	args: {
		variant: 'medium',
	},
}
export const Large: Story = {
	args: {
		variant: 'large',
	},
}
export const FullWidth: Story = {
	args: {
		variant: 'full-width',
	},
}
