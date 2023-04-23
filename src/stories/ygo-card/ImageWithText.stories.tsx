import type { Meta, StoryObj } from '@storybook/react'
import ImageWithText from '../../components/ygo-card/ImageWithText'
import React from 'react'

const meta: Meta<typeof ImageWithText> = {
	title: 'Yugioh Card/Image With Text',
	component: ImageWithText,
	args: {
		imageComponent: <img src='https://images.thesupremekingscastle.com/cards/tn/94689206.jpg' className='base-img' />,
		text: 'X4',
	},
}
export default meta

type Story = StoryObj<typeof ImageWithText>

export const Default: Story = {}
