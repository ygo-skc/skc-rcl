import { fireEvent, render, screen } from '@testing-library/react'
import Tile from '../Tile'
import React from 'react'

const total = 100
const subject = 'Pencils'
const color = 'rgb(255, 0, 100)'
const action = jest.fn()
const variant = 'small'

describe('tile should render correctly', () => {
	beforeEach(() => render(<Tile total={total} subject={subject} color={color} action={action} variant={variant} />))

	it('Container should render correctly', () => {
		const tileEl = screen.getByTestId('tile-component')
		expect(tileEl).toBeInTheDocument()
		expect(tileEl.childNodes.length).toBe(2)

		expect(tileEl.classList.contains(variant)).toBe(true)
		expect(tileEl.classList.contains('tile')).toBe(true)

		fireEvent.click(tileEl)
		expect(action).toHaveBeenCalledTimes(1)
	})

	it('Prominent Text should render correctly', () => {
		const tileEl = screen.getByTestId('tile-component-prominent-text')
		expect(tileEl).toBeInTheDocument()

		expect(tileEl.classList.contains('tile-prominent-text')).toBe(true)

		expect(tileEl).toHaveTextContent('100')
	})

	it('Sub Text should render correctly', () => {
		const tileEl = screen.getByTestId('tile-component-sub-text')
		expect(tileEl).toBeInTheDocument()

		expect(tileEl.style.color).toBe(color)

		expect(tileEl).toHaveTextContent(subject)
	})
})
