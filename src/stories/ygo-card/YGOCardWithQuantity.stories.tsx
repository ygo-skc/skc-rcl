import type { Meta, StoryObj } from '@storybook/react'
import YGOCardWithQuantity from '../../components/ygo-card/YGOCardWithQuantity'
import React from 'react'

const meta: Meta<typeof YGOCardWithQuantity> = {
	title: 'Yugioh Card/Yugioh Card',
	component: YGOCardWithQuantity,
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

type Story = StoryObj<typeof YGOCardWithQuantity>

export const YugiohCardWithOccurrence: Story = {
	args: {
		occurrences: 3,
	},
}
