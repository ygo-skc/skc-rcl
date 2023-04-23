import type { Meta, StoryObj } from '@storybook/react'
import CardAssociation from '../../components/ygo-card/CardAssociation'

const meta: Meta<typeof CardAssociation> = {
	title: 'Yugioh Card/Card Association',
	component: CardAssociation,
	args: {
		monsterAssociation: {
			level: 4,
		},
		attribute: 'Wind',
	},
}
export default meta

type Story = StoryObj<typeof CardAssociation>

export const Level: Story = {}
export const Rank: Story = {
	args: {
		monsterAssociation: {
			rank: 4,
		},
	},
}
export const Pendulum: Story = {
	args: {
		monsterAssociation: {
			level: 4,
			scaleRating: 10,
		},
	},
}

// Attributes
export const Dark: Story = {
	args: {
		attribute: 'Dark',
	},
}
export const Earth: Story = {
	args: {
		attribute: 'Earth',
	},
}
export const Fire: Story = {
	args: {
		attribute: 'Fire',
	},
}
export const Light: Story = {
	args: {
		attribute: 'Light',
	},
}
export const Water: Story = {
	args: {
		attribute: 'Water',
	},
}
export const Wind: Story = {
	args: {
		attribute: 'Wind',
	},
}
