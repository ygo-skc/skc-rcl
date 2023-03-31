import React from 'react'
import YGOCard, { YGOCardProps } from '../../components/ygo-card/YGOCard'

const Template = (args) => <YGOCard {...args} />

export default {
	title: 'Yugioh-Card/YGOCard',
	component: YGOCard,
}

export const FullDetails_False = Template.bind({})
FullDetails_False.args = {
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
	fullDetails: false,
	isLoading: false,
	className: 'normal-ygo-card-style',
} as YGOCardProps

export const FullDetails_True = Template.bind({})
FullDetails_True.args = {
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
	fullDetails: true,
	isLoading: false,
	className: 'normal-ygo-card-style',
} as YGOCardProps
