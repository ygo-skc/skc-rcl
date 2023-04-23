import type { Meta, StoryObj } from '@storybook/react'
import DateComponent from '../../components/data-display/DateComponent'

const meta: Meta<typeof DateComponent> = {
	title: 'Generic/Date Component',
	component: DateComponent,
	args: {
		month: 'Jan',
		day: 25,
		year: 2023,
	},
}
export default meta

type Story = StoryObj<typeof DateComponent>

export const Default: Story = {}
