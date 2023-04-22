import type { Meta, StoryObj } from '@storybook/react'
import YGOCard from '../../components/ygo-card/YGOCard'
import React from 'react'

const meta: Meta<typeof YGOCard> = {
	title: 'Yugioh Card/Yugioh Card',
	component: YGOCard,
	decorators: [
		(Story) => (
			<div style={{ width: '300px' }}>
				<Story />
			</div>
		),
	],
	args: {
		card: {
			cardName: 'DARK MAGICIAN',
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

type Story = StoryObj<typeof YGOCard>

export const DarkMagician: Story = {}
