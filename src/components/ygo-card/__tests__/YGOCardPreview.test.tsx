/// <reference types="node" />
// reads the stylesheets to check their colours stay in step with the card frame and atk/def styles
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { render, screen } from '@testing-library/react'
import React from 'react'
import YGOCardPreview from '../YGOCardPreview'

const CSS_DIR = join(__dirname, '../../../css/ygo-card')
const CARD_COLORS = ['normal', 'effect', 'ritual', 'fusion', 'synchro', 'xyz', 'link', 'token', 'spell', 'trap']

function renderPreview(card: Partial<SKCCard>) {
	render(<YGOCardPreview card={{ cardID: '1', cardName: 'Test card', cardEffect: 'Effect text.', cardColor: 'effect', ...card } as SKCCard} />)
}

const association = (values: Partial<SKCMonsterAssociation>) => values as SKCMonsterAssociation

describe('Card preview', () => {
	it('shows the card art, name and effect', () => {
		renderPreview({ cardID: '46986414', cardName: 'Dark Magician', cardEffect: 'The ultimate wizard.' })

		expect(screen.getByText('Dark Magician')).toBeInTheDocument()
		expect(screen.getByText('The ultimate wizard.')).toBeInTheDocument()
		expect(screen.getByRole('presentation')).toHaveAttribute('src', 'https://images.thesupremekingscastle.com/cards/md/46986414.jpg')
	})

	it('shows a monster full type as one chip coloured by its card frame', () => {
		renderPreview({ cardColor: 'Fusion' as cardColor, cardAttribute: 'Dark' as CardAttribute, monsterType: 'Spellcaster/Fusion/Effect' })

		expect(screen.getByText('Spellcaster/Fusion/Effect').closest('.MuiChip-root')).toHaveClass('ygo-card-preview__type--fusion')
		expect(screen.queryByText('Fusion')).not.toBeInTheDocument()
	})

	it('keeps the hyphenated frame name for pendulums', () => {
		renderPreview({ cardColor: 'Pendulum-Effect' as cardColor })

		expect(screen.getByText('Pendulum-Effect').closest('.MuiChip-root')).toHaveClass('ygo-card-preview__type--pendulum-effect')
	})

	it('shows spells and traps by their frame once', () => {
		renderPreview({ cardColor: 'Spell' as cardColor, cardAttribute: 'Spell' as CardAttribute })

		expect(screen.getAllByText('Spell')).toHaveLength(1)
		expect(screen.getByRole('img', { name: 'Spell attribute' })).toBeInTheDocument()
	})

	it('puts the attribute icon before the type', () => {
		renderPreview({ cardAttribute: 'Dark' as CardAttribute, monsterType: 'Spellcaster/Effect' })

		const details = screen.getByRole('list', { name: 'Card details' })
		expect(details.firstElementChild).toContainElement(screen.getByRole('img', { name: 'Dark attribute' }))
		expect(details.lastElementChild).toHaveTextContent('Spellcaster/Effect')
	})

	it('shows atk and def coloured like the card page', () => {
		renderPreview({ monsterType: 'Dragon/Normal', monsterAttack: '3000', monsterDefense: '2500' })

		expect(screen.getByText('3000')).toHaveClass('ygo-card-preview__atk')
		expect(screen.getByText('2500')).toHaveClass('ygo-card-preview__def')
	})

	it('shows no def for link monsters', () => {
		renderPreview({ cardColor: 'Link' as cardColor, monsterType: 'Cyberse/Link/Effect', monsterAttack: '2300' })

		expect(screen.getByText('2300')).toBeInTheDocument()
		expect(screen.queryByText('DEF')).not.toBeInTheDocument()
	})

	it('shows level, rank and pendulum scale when present', () => {
		renderPreview({ monsterType: 'Dragon/Pendulum/Effect', monsterAssociation: association({ level: 7, scaleRating: 4 }) })

		expect(screen.getByRole('img', { name: 'Level' })).toHaveAttribute('src', 'card_level.svg')
		expect(screen.getByText('x7')).toBeInTheDocument()
		expect(screen.getByRole('img', { name: 'Pendulum scale' })).toHaveAttribute('src', 'card_pendulum_scale.svg')
		expect(screen.getByText('x4')).toBeInTheDocument()
		expect(screen.queryByRole('img', { name: 'Rank' })).not.toBeInTheDocument()
	})

	it('shows rank for xyz monsters and rating with arrows for link monsters', () => {
		renderPreview({ monsterAssociation: association({ rank: 4, linkRating: 3, linkArrows: ['Top', 'Bottom-Left'] }) })

		expect(screen.getByRole('img', { name: 'Rank' })).toHaveAttribute('src', 'card_rank.svg')
		expect(screen.getByText('L3: Top Bottom-Left')).toBeInTheDocument()
	})

	it('shows nothing extra without a monster association', () => {
		renderPreview({ monsterType: 'Dragon/Normal' })

		expect(screen.queryByText(/^x\d/)).not.toBeInTheDocument()
	})
})

describe('Card preview text', () => {
	it('takes its sizes from the MUI theme through Typography variants', () => {
		renderPreview({ cardName: 'Dark Magician', cardEffect: 'The ultimate wizard.', monsterAttack: '2500', monsterDefense: '2100', monsterAssociation: association({ level: 7 }) })

		expect(screen.getByText('Dark Magician')).toHaveClass('MuiTypography-h6')
		expect(screen.getByText('The ultimate wizard.')).toHaveClass('MuiTypography-body2')
		expect(screen.getByText('x7')).toHaveClass('MuiTypography-subtitle2')
		expect(screen.getByText('ATK')).toHaveClass('MuiTypography-caption')
		expect(screen.getByText('2500')).toHaveClass('MuiTypography-subtitle1')
	})

	it('sets no font sizes, weights or line heights of its own', () => {
		const preview = readFileSync(join(CSS_DIR, 'ygo-card-preview.css'), 'utf8')

		expect(preview).not.toMatch(/font-(size|weight|family)|line-height|letter-spacing/)
	})
})

describe('Card preview styles', () => {
	const preview = readFileSync(join(CSS_DIR, 'ygo-card-preview.css'), 'utf8')
	const ruleFor = (color: string) => preview.slice(preview.indexOf(`.ygo-card-preview__type--${color}.MuiChip-root`)).split('}')[0]

	it('colours every frame chip exactly like the card frames, with their matching text colour', () => {
		const frames = readFileSync(join(CSS_DIR, 'ygo-card-styles.css'), 'utf8')
		const frameRule = (color: string) => frames.slice(frames.indexOf(`.${color}-ygo-card-style {`)).split('}')[0]
		const value = (rule: string, property: string) => rule.match(new RegExp(`(?:^|\\s)${property}:\\s*([^;!]+)`))?.[1].trim()

		CARD_COLORS.forEach((color) => {
			expect(value(ruleFor(color), 'background')).toBe(value(frameRule(color), 'background'))
			expect(value(ruleFor(color), 'color')).toBe(value(frameRule(color), 'color'))
		})
	})

	it('styles every pendulum frame', () => {
		;['normal', 'effect', 'ritual', 'fusion', 'synchro', 'xyz'].forEach((color) => expect(preview).toContain(`.ygo-card-preview__type--pendulum-${color}`))
	})

	it('colours atk and def like the card page', () => {
		const atkDef = readFileSync(join(CSS_DIR, 'atk-def.css'), 'utf8')
		const colorOf = (css: string, selector: string) =>
			css
				.slice(css.indexOf(selector))
				.split('}')[0]
				.match(/\scolor:\s*([^;]+)/)?.[1]
				.trim()

		expect(colorOf(preview, '.ygo-card-preview__atk')).toBe(colorOf(atkDef, '.monster-attack-stat'))
		expect(colorOf(preview, '.ygo-card-preview__def')).toBe(colorOf(atkDef, '.monster-defense-stat'))
	})
})
