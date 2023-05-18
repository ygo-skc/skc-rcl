import type { Meta, StoryObj } from '@storybook/react'
import YGOCardWithPreviousBanStatus from '../../components/ygo-card/YGOCardWithPreviousBanStatus'
import React from 'react'

const meta: Meta<typeof YGOCardWithPreviousBanStatus> = {
	title: 'Yugioh Card/Yugioh Card',
	component: YGOCardWithPreviousBanStatus,
	decorators: [
		(Story) => (
			<div style={{ width: '300px' }}>
				<Story />
			</div>
		),
	],
	args: {
		card: {
			cardName: 'Dark Magician',
			cardColor: 'Normal',
			cardEffect: 'The ultimate wizard in terms of attack and defense.',
			monsterType: 'Spellcaster/Normal',
			monsterAssociation: {
				level: '7',
			},
			monsterAttack: '2500',
			monsterDefense: '2100',
			cardID: '46986414',
		},
	},
}
export default meta

type Story = StoryObj<typeof YGOCardWithPreviousBanStatus>

export const PreviouslyForbiddenYugiohCard: Story = {
	args: {
		previousBanStatus: 'Forbidden',
	},
}

export const PreviouslyLimitedYugiohCard: Story = {
	args: {
		previousBanStatus: 'Limited',
	},
}

export const PreviouslySemiLimitedYugiohCard: Story = {
	args: {
		previousBanStatus: 'Semi-Limited',
	},
}
