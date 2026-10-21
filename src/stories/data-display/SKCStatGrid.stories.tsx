import type { Meta, StoryObj } from '@storybook/react'
import SKCStatGrid from '../../components/data-display/SKCStatGrid'

const meta: Meta<typeof SKCStatGrid> = {
	title: 'Generic/SKCStatGrid',
	component: SKCStatGrid,
	args: {
		stats: [
			{ label: 'Product ID', value: 'MAMO' },
			{ label: 'Product Type', value: 'Set' },
			{ label: 'Product Sub-Type', value: 'Collector' },
			{ label: 'American Release', value: 'Sep 4, 2026' },
			{ label: 'Total Unique Cards', value: '126' },
		],
	},
}
export default meta

type Story = StoryObj<typeof SKCStatGrid>

export const ProductSummary: Story = {}
export const TwoStats: Story = {
	args: {
		stats: [
			{ label: 'Total', value: '13502' },
			{ label: 'Displaying', value: '50' },
		],
	},
}
