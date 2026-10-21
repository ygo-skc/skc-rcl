import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import YGOCardPreview from '../../components/ygo-card/YGOCardPreview'

const meta: Meta<typeof YGOCardPreview> = {
	title: 'Yugioh Card/Card Preview',
	component: YGOCardPreview,
	decorators: [
		(Story) => (
			<div style={{ width: 300, padding: 18, background: '#f4f1fc', fontFamily: 'Open Sans, sans-serif' }}>
				<Story />
			</div>
		),
	],
	args: {
		card: {
			cardID: '38033121',
			cardName: 'Dark Magician Girl',
			cardColor: 'Effect' as cardColor,
			cardAttribute: 'Dark' as CardAttribute,
			monsterType: 'Spellcaster/Effect',
			monsterAttack: '2000',
			monsterDefense: '1700',
			monsterAssociation: { level: 6 } as SKCMonsterAssociation,
			cardEffect: 'Gains 300 ATK for every "Dark Magician" or "Magician of Black Chaos" in the GY.',
		},
	},
}
export default meta

type Story = StoryObj<typeof YGOCardPreview>

export const EffectMonster: Story = {}
export const PendulumMonster: Story = {
	args: {
		card: {
			cardID: '16178681',
			cardName: 'Odd-Eyes Pendulum Dragon',
			cardColor: 'Pendulum-Effect' as cardColor,
			cardAttribute: 'Dark' as CardAttribute,
			monsterType: 'Dragon/Pendulum/Effect',
			monsterAttack: '2500',
			monsterDefense: '2000',
			monsterAssociation: { level: 7, scaleRating: 4 } as SKCMonsterAssociation,
			cardEffect: 'Pendulum Effect\nYou can reduce the battle damage you take from an attack involving a Pendulum Monster you control to 0.',
		},
	},
}
export const LinkMonster: Story = {
	args: {
		card: {
			cardID: '1861629',
			cardName: 'Decode Talker',
			cardColor: 'Link' as cardColor,
			cardAttribute: 'Dark' as CardAttribute,
			monsterType: 'Cyberse/Link/Effect',
			monsterAttack: '2300',
			monsterAssociation: { linkRating: 3, linkArrows: ['Top', 'Bottom-Left', 'Bottom-Right'] } as SKCMonsterAssociation,
			cardEffect: '2+ Effect Monsters\nGains 500 ATK for each monster it points to.',
		},
	},
}
export const SpellCard: Story = {
	args: {
		card: {
			cardID: '83764718',
			cardName: 'Monster Reborn',
			cardColor: 'Spell' as cardColor,
			cardAttribute: 'Spell' as CardAttribute,
			cardEffect: "Target 1 monster in either player's GY; Special Summon it.",
		},
	},
}
