import React from 'react'
import YGOCardStats, { YGOCardStatsProps } from '../../components/ygo-card/YGOCardStats'

const Template = (args) => <YGOCardStats {...args} />

export default {
	title: 'Yugioh-Card/YGOCardStats',
	component: YGOCardStats,
}

export const FullDetails_False = Template.bind({})
FullDetails_False.args = {
	cardColor: 'Normal',
	cardEffect: 'The ultimate wizard in terms of attack and defense.',
	monsterType: 'Spellcaster/Normal',
	monsterAttack: '2500',
	monsterDefense: '2100',
	cardID: '46986414',
	fullDetails: false,
} as YGOCardStatsProps

export const FullDetails_True = Template.bind({})
FullDetails_True.args = {
	cardColor: 'Normal',
	cardEffect: 'The ultimate wizard in terms of attack and defense.',
	monsterType: 'Spellcaster/Normal',
	monsterAttack: '2500',
	monsterDefense: '2100',
	cardID: '46986414',
	fullDetails: true,
} as YGOCardStatsProps
