import type { Meta, StoryObj } from '@storybook/react'
import YGOCardAttribute from '../../components/ygo-card/YGOCardAttribute'

const meta: Meta<typeof YGOCardAttribute> = {
	title: 'Yugioh Card/Attribute',
	component: YGOCardAttribute,
	args: {
		attribute: 'Dark',
	},
}
export default meta

type Story = StoryObj<typeof YGOCardAttribute>

export const Dark: Story = {}
export const Light: Story = { args: { attribute: 'Light' } }
export const Spell: Story = { args: { attribute: 'Spell' } }
export const Trap: Story = { args: { attribute: 'Trap' } }
