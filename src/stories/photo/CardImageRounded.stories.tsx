import type { Meta, StoryObj } from '@storybook/react'
import CardImageRounded from '../../components/photo/CardImageRounded'
import React from 'react'

const meta: Meta<typeof CardImageRounded> = {
	title: 'Photo/Card Image Rounded',
	component: CardImageRounded,
	decorators: [
		(Story) => (
			<div style={{ width: '300px' }}>
				<Story />
			</div>
		),
	],
	args: {
		cardImg: 'https://images.thesupremekingscastle.com/cards/md/13256226.jpg',
	},
}
export default meta

type Story = StoryObj<typeof CardImageRounded>

export const Default: Story = {}
