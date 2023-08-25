import type { Meta, StoryObj } from '@storybook/react'
import YGOCardData from '../../components/ygo-card/YGOCardData'

const meta: Meta<typeof YGOCardData> = {
	title: 'Yugioh Card/Yugioh Card Data',
	component: YGOCardData,
	args: {
		cardName: 'Dark Magician',
		cardColor: 'Normal',
		cardEffect: 'The ultimate wizard in terms of attack and defense.',
		cardAttribute: 'Dark',
		monsterType: 'Spellcaster/Normal',
		monsterAssociation: {
			level: '7',
		},
		monsterAttack: '2500',
		monsterDefense: '2100',
		cardID: '46986414',
		fullDetails: false,
		isLoading: false,
		className: 'normal-ygo-card-style',
	},
}
export default meta

type Story = StoryObj<typeof YGOCardData>

export const YGOCardDataNotFullDetails: Story = {}

export const YGOCardDataFullDetails: Story = {
	args: {
		fullDetails: true,
	},
}
