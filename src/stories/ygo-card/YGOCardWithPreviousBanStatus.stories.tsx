import React from 'react'
import YGOCardWithPreviousBanStatus, { YGOCardWithPreviousBanStatusProps } from '../../components/ygo-card/YGOCardWithPreviousBanStatus'

const Template = (args) => <YGOCardWithPreviousBanStatus {...args} />

export default {
	title: 'Yugioh-Card/YGOCardWithPreviousBanStatus',
	component: YGOCardWithPreviousBanStatus,
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
	previousBanStatus: 'Forbidden',
} as YGOCardWithPreviousBanStatusProps
