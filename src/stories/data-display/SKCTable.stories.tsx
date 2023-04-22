import React from 'react'

import SKCTable, { SKCTableProps } from '../../components/data-display/SKCTable'

const Template = (args: SKCTableProps) => <SKCTable {...args} />

export default {
	title: 'Generic/SKCTable',
	component: SKCTable,
}

export const Default = Template.bind({})
Default.args = {
	header: ['Name', 'Address'],
	rows: [
		['Javi', '123 Fake Street'],
		['Becky', '456 Fake Street'],
	],
} as SKCTableProps

export const WithOnClick = Template.bind({})
WithOnClick.args = {
	header: ['Name', 'Address'],
	rows: [
		['Javi', '123 Fake Street'],
		['Becky', '456 Fake Street'],
	],
	rowActions: [getOnClick(1), getOnClick(2)],
} as SKCTableProps

function getOnClick(rowNum: number) {
	return () => console.log(`Row ${rowNum} on click`)
}
