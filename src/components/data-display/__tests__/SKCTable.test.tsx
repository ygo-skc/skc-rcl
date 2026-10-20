/// <reference types="node" />
// reads the stylesheet to check it stays scoped to the table and leaves text to the theme
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fireEvent, render, screen, within } from '@testing-library/react'
import React from 'react'
import SKCTable from '../SKCTable'

const rows = [
	['001', "Dark Magician, the Pharaoh's Servant", 'Effect'],
	['002', 'Kuriboh - Multiply!', 'Effect'],
]

describe('Table', () => {
	it('shows the header as column headers', () => {
		render(<SKCTable header={['No.', 'Card', 'Frame']} rows={rows} />)

		expect(screen.getAllByRole('columnheader').map((cell) => cell.textContent)).toEqual(['No.', 'Card', 'Frame'])
	})

	it('renders no header row when there is no header', () => {
		render(<SKCTable header={[]} rows={rows} />)

		expect(screen.queryByRole('columnheader')).not.toBeInTheDocument()
		expect(screen.getAllByRole('row')).toHaveLength(2)
	})

	it('shows every value, even when a row repeats one', () => {
		render(<SKCTable header={[]} rows={[['Effect', 'Effect']]} />)

		expect(within(screen.getByRole('row')).getAllByText('Effect')).toHaveLength(2)
	})

	it('marks numeric values so they line up on the right', () => {
		render(
			<SKCTable
				header={[]}
				rows={[
					['Total Unique Cards', '126'],
					['Released', 'Sep 4, 2026'],
					['Share', '60.5%'],
				]}
			/>,
		)

		expect(screen.getByText('126')).toHaveClass('skc-table__cell--numeric')
		expect(screen.getByText('60.5%')).toHaveClass('skc-table__cell--numeric')
		expect(screen.getByText('Sep 4, 2026')).not.toHaveClass('skc-table__cell--numeric')
		expect(screen.getByText('Total Unique Cards')).not.toHaveClass('skc-table__cell--numeric')
	})

	it('lines up a header with its column when every value in the column is numeric', () => {
		render(
			<SKCTable
				header={['No.', 'Card', 'Prints']}
				rows={[
					['001', 'Dark Magical Curtain', '3'],
					['002', 'Kuriboh - Multiply!', 'n/a'],
				]}
			/>,
		)

		const [number, card, prints] = screen.getAllByRole('columnheader')
		expect(number).toHaveClass('skc-table__cell--numeric')
		expect(card).not.toHaveClass('skc-table__cell--numeric')
		expect(prints).not.toHaveClass('skc-table__cell--numeric')
	})

	it('runs a row action on click and from the keyboard', () => {
		const first = jest.fn()
		const second = jest.fn()
		render(<SKCTable header={[]} rows={rows} rowActions={[first, second]} />)

		const [firstRow, secondRow] = screen.getAllByRole('row')
		fireEvent.click(firstRow)
		secondRow.focus()
		fireEvent.keyDown(secondRow, { key: 'Enter' })

		expect(firstRow).toHaveAttribute('tabindex', '0')
		expect(first).toHaveBeenCalledTimes(1)
		expect(second).toHaveBeenCalledTimes(1)
	})

	it('leaves rows without actions out of the tab order', () => {
		render(<SKCTable header={[]} rows={rows} />)

		screen.getAllByRole('row').forEach((row) => expect(row).not.toHaveAttribute('tabindex'))
	})
})

describe('Table styles', () => {
	const css = readFileSync(join(__dirname, '../../../css/data-display/table.css'), 'utf8')
	const selectors = css
		.replace(/\/\*[\s\S]*?\*\//g, '')
		.split('}')
		.map((rule) => rule.split('{')[0].trim())
		.filter(Boolean)
		.flatMap((selector) => selector.split(',').map((part) => part.trim()))

	it('only styles tables it renders, never every table on the page', () => {
		selectors.forEach((selector) => expect(selector).toMatch(/^\.skc-table/))
	})

	it('leaves text sizes and weights to the MUI theme', () => {
		expect(css).not.toMatch(/font-(size|weight|family)|line-height|letter-spacing/)
	})
})
