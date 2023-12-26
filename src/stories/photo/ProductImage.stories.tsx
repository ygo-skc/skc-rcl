import type { Meta, StoryObj } from '@storybook/react'
import ProductImage from '../../components/photo/ProductImage'
import React from 'react'

const meta: Meta<typeof ProductImage> = {
	title: 'Photo/Product Image',
	component: ProductImage,
	decorators: [
		(Story) => (
			<div style={{ width: '300px' }}>
				<Story />
			</div>
		),
	],
	args: {
		productID: 'RA01',
		variant: 'md',
		loading: 'lazy',
	},
}
export default meta

type Story = StoryObj<typeof ProductImage>

export const Default: Story = {}
