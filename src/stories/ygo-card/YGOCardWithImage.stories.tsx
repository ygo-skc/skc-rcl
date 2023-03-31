import React from 'react'
import YGOCardWithImage, { YGOCardWithImageProps } from '../../components/ygo-card/YGOCardWithImage'

const Template = (args) => <YGOCardWithImage {...args} />

export default {
	title: 'Yugioh-Card/YGOCardWithImage',
	component: YGOCardWithImage,
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
} as YGOCardWithImageProps
