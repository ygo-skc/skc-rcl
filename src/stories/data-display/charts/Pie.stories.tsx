import React from 'react'

import Pie, { PieProps } from '../../../components/data-display/charts/Pie'

const Template = (args: PieProps) => <Pie {...args} />

export default {
	title: 'Charts/Pie',
	component: Pie,
}

export const Default = Template.bind({})
Default.args = {
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
} as PieProps
