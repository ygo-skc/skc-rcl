import type { Meta, StoryObj } from '@storybook/react'
import { action } from 'storybook/actions'
import SKCTable from '../../components/data-display/SKCTable'

const meta: Meta<typeof SKCTable> = {
	title: 'Generic/SKCTable',
	component: SKCTable,
	args: {
		header: ['Name', 'Address'],
		rows: [
			['Javi', '123 Fake Street'],
			['Becky', '456 Fake Street'],
		],
	},
}
export default meta

type Story = StoryObj<typeof SKCTable>

export const Default: Story = {}

export const WithOnClick: Story = {
	args: {
		rowActions: [action('clicked'), action('clicked')],
	},
}

export const NumericColumns: Story = {
	args: {
		header: ['No.', 'Card', 'Frame', 'Prints'],
		rows: [
			['001', "Dark Magician, the Pharaoh's Servant", 'Effect', '3'],
			['002', 'Kuriboh - Multiply!', 'Effect', '3'],
			['003', 'Dark Magical Curtain', 'Spell', '3'],
			['004', 'Favorite HERO Shining Flare Wingman', 'Fusion', '3'],
		],
	},
}

export const WithoutHeader: Story = {
	args: {
		header: [],
		rows: [
			['Total', '13502'],
			['Displaying', '50'],
		],
	},
}
