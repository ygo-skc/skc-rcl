import React from 'react'
import AtkDef, { AtkDefProps } from '../../components/ygo-card/AtkDef'

const Template = (args) => <AtkDef {...args} />

export default {
	title: 'Yugioh-Card/Attack-Defense',
	component: AtkDef,
}

export const NormalMonster = Template.bind({})
NormalMonster.args = {
	monsterAtk: '2500',
	monsterDef: '2000',
	cardColor: 'Normal',
} as AtkDefProps

export const NormalMonsterUndefinedStats = Template.bind({})
NormalMonsterUndefinedStats.args = {
	monsterAtk: undefined,
	monsterDef: undefined,
	cardColor: 'Normal',
} as AtkDefProps

export const LinkMonster = Template.bind({})
LinkMonster.args = {
	monsterAtk: '2500',
	monsterDef: '2000',
	cardColor: 'Link',
} as AtkDefProps
