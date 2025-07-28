import type { Meta, StoryObj } from '@storybook/react'
import { action } from 'storybook/actions'
import Tile from '../../components/data-display/Tile'

const meta: Meta<typeof Tile> = {
	title: 'Generic/Tile',
	component: Tile,
	args: {
		total: 30,
		subject: 'Active Members Currently Online',
		color: 'purple',
		action: action('Clicked!'),
	},
}
export default meta

type Story = StoryObj<typeof Tile>

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
