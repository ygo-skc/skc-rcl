import React from 'react'
import CardImageRounded, { CardImageRoundedProps } from '../../components/photo/CardImageRounded'

const Template = (args: CardImageRoundedProps) => <CardImageRounded {...args} />

export default {
	title: 'Photo/CardImageRounded',
	component: CardImageRounded,
}

export const Default = Template.bind({})
Default.args = {
	cardImg: 'https://images.thesupremekingscastle.com/cards/md/13256226.jpg',
} as CardImageRoundedProps
