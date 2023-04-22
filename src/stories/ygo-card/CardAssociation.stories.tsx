import React from 'react'
import CardAssociation, { CardAssociationProps } from '../../components/ygo-card/CardAssociation'

const Template = (args) => <CardAssociation {...args} />

export default {
	title: 'Yugioh Card/CardAssociation',
	component: CardAssociation,
}

export const Level = Template.bind({})
Level.args = {
	monsterAssociation: {
		level: 4,
	},
	attribute: 'Wind',
} as CardAssociationProps

export const Rank = Template.bind({})
Rank.args = {
	monsterAssociation: {
		rank: 4,
	},
	attribute: 'Wind',
} as CardAssociationProps

export const Pendulum = Template.bind({})
Pendulum.args = {
	monsterAssociation: {
		level: 4,
		scaleRating: 10,
	},
	attribute: 'Wind',
} as CardAssociationProps

export const Dark = Template.bind({})
Dark.args = {
	monsterAssociation: {
		level: 4,
	},
	attribute: 'Dark',
} as CardAssociationProps

export const Earth = Template.bind({})
Earth.args = {
	monsterAssociation: {
		level: 4,
	},
	attribute: 'Earth',
} as CardAssociationProps

export const Fire = Template.bind({})
Fire.args = {
	monsterAssociation: {
		level: 4,
	},
	attribute: 'Fire',
} as CardAssociationProps

export const Light = Template.bind({})
Light.args = {
	monsterAssociation: {
		level: 4,
	},
	attribute: 'Light',
} as CardAssociationProps

export const Water = Template.bind({})
Water.args = {
	monsterAssociation: {
		level: 4,
	},
	attribute: 'Water',
} as CardAssociationProps

export const Wind = Template.bind({})
Wind.args = {
	monsterAssociation: {
		level: 4,
	},
	attribute: 'Wind',
} as CardAssociationProps
