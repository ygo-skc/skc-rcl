import type { Meta, StoryObj } from '@storybook/react'
import YGOCardStats from '../../components/ygo-card/YGOCardStats'

const meta: Meta<typeof YGOCardStats> = {
	title: 'Yugioh Card/Yugioh Card Data',
	component: YGOCardStats,
	args: {
		cardColor: 'Normal',
		cardEffect: 'The ultimate wizard in terms of attack and defense.',
		monsterType: 'Spellcaster/Normal',
		monsterAttack: '2500',
		monsterDefense: '2100',
		cardID: '46986414',
		fullDetails: false,
	},
}
export default meta

type Story = StoryObj<typeof YGOCardStats>

export const CardStats: Story = {}

export const CardStatsFullDetails: Story = {
	args: {
		fullDetails: true,
	},
}
