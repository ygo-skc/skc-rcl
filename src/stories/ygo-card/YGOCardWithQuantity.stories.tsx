import React from 'react'
import YGOCardWithQuantity, { YGOCardWithQuantityProps } from '../../components/ygo-card/YGOCardWithQuantity'

const Template = (args) => <YGOCardWithQuantity {...args} />

export default {
	title: 'Yugioh-Card/YGOCardWithQuantity',
	component: YGOCardWithQuantity,
}

export const Default = Template.bind({})
Default.args = {
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
	occurrences: 2,
} as YGOCardWithQuantityProps
