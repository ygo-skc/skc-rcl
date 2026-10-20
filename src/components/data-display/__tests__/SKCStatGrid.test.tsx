/// <reference types="node" />
// reads the stylesheet to check it leaves text to the theme
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { render, screen } from '@testing-library/react'
import React from 'react'
import SKCStatGrid from '../SKCStatGrid'

const stats = [
	{ label: 'Product ID', value: 'MAMO' },
	{ label: 'American Release', value: 'Sep 4, 2026' },
	{ label: 'Total Unique Cards', value: '126' },
]

describe('Stat grid', () => {
	it('lists each stat as a term and its value', () => {
		render(<SKCStatGrid stats={stats} />)

		expect(screen.getAllByRole('term').map((term) => term.textContent)).toEqual(['Product ID', 'American Release', 'Total Unique Cards'])
		expect(screen.getAllByRole('definition').map((value) => value.textContent)).toEqual(['MAMO', 'Sep 4, 2026', '126'])
	})

	it('accepts elements as values', () => {
		render(<SKCStatGrid stats={[{ label: 'Docs', value: <a href='/docs'>API docs</a> }]} />)

		expect(screen.getByRole('definition')).toContainElement(screen.getByRole('link', { name: 'API docs' }))
	})

	it('takes text sizes from the MUI theme', () => {
		render(<SKCStatGrid stats={stats} />)

		expect(screen.getByText('Product ID')).toHaveClass('MuiTypography-body2')
		expect(screen.getByText('MAMO')).toHaveClass('MuiTypography-subtitle2')
	})

	it('sets no font sizes or weights of its own', () => {
		const css = readFileSync(join(__dirname, '../../../css/data-display/stat-grid.css'), 'utf8')

		expect(css).not.toMatch(/font-(size|weight|family)|line-height|letter-spacing/)
	})
})
