import React from 'react'
import ImageWithText, { ImageWithTextProps } from '../../components/ygo-card/ImageWithText'

const Template = (args) => <ImageWithText {...args} />

export default {
	title: 'Yugioh-Card/ImageWithText',
	component: ImageWithText,
}

export const Default = Template.bind({})
Default.args = {
	imageComponent: <img src='https://images.thesupremekingscastle.com/cards/tn/94689206.jpg' className='base-img' />,
	text: 'X4',
} as ImageWithTextProps
