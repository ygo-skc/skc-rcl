import type { Meta, StoryObj } from '@storybook/react'
import Pie from '../../../components/data-display/charts/Pie'

const meta: Meta<typeof Pie> = {
	title: 'Charts/Pie',
	component: Pie,
	args: {
		data: [
			{
				id: 'Monsters',
				label: 'Monsters',
				value: 20,
			},
			{
				id: 'Spells',
				label: 'Spells',
				value: 15,
			},
			{
				id: 'Traps',
				label: 'Traps',
				value: 5,
			},
		],
		statName: 'Deck List Spread',
		legendTextColor: 'black',
		isDataLoaded: true,
	},
}
export default meta

type Story = StoryObj<typeof Pie>

export const Default: Story = {}
