import type { Meta, StoryObj } from '@storybook/react'
import AtkDef from '../../components/ygo-card/AtkDef'

const meta: Meta<typeof AtkDef> = {
	title: 'Yugioh Card/Attack and Defense',
	component: AtkDef,
	args: {
		monsterAtk: '2500',
		monsterDef: '2000',
		cardColor: 'Normal',
	},
}
export default meta

type Story = StoryObj<typeof AtkDef>

export const NormalMonster: Story = {}
export const NormalMonsterUndefinedStats: Story = {
	args: {
		monsterAtk: undefined,
		monsterDef: undefined,
	},
}
export const LinkMonster: Story = {
	args: {
		cardColor: 'Link',
	},
}
