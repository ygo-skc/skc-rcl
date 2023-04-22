import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
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
