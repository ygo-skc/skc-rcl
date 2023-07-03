import type { Meta, StoryObj } from '@storybook/react'
import YGOCardColorIndicator from '../../components/ygo-card/YGOCardColorIndicator'

const meta: Meta<typeof YGOCardColorIndicator> = {
	title: 'Yugioh Card/Color Indicator',
	component: YGOCardColorIndicator,
	args: {
		cardColor: 'Normal',
	},
}
export default meta

type Story = StoryObj<typeof YGOCardColorIndicator>

export const Normal: Story = {}

export const Effect: Story = {
	args: {
		cardColor: 'Effect',
	},
}

export const Ritual: Story = {
	args: {
		cardColor: 'Ritual',
	},
}

export const Fusion: Story = {
	args: {
		cardColor: 'Fusion',
	},
}

export const Synchro: Story = {
	args: {
		cardColor: 'Synchro',
	},
}

export const Xyz: Story = {
	args: {
		cardColor: 'Xyz',
	},
}

export const Link: Story = {
	args: {
		cardColor: 'Link',
	},
}

export const PendulumNormal: Story = {
	args: {
		cardColor: 'Pendulum-Normal',
	},
}

export const PendulumEffect: Story = {
	args: {
		cardColor: 'Pendulum-Effect',
	},
}

export const PendulumRitual: Story = {
	args: {
		cardColor: 'Pendulum-Ritual',
	},
}

export const PendulumFusion: Story = {
	args: {
		cardColor: 'Pendulum-Fusion',
	},
}

export const PendulumSynchro: Story = {
	args: {
		cardColor: 'Pendulum-Synchro',
	},
}

export const PendulumXyz: Story = {
	args: {
		cardColor: 'Pendulum-Xyz',
	},
}

export const Trap: Story = {
	args: {
		cardColor: 'Trap',
	},
}

export const Spell: Story = {
	args: {
		cardColor: 'Spell',
	},
}

export const Large: Story = {
	args: {
		cardColor: 'Normal',
		variant: 'large',
	},
}
