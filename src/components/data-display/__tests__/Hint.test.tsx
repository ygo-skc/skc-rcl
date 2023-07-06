import { render, screen } from '@testing-library/react'
import Hint from '../Hint'
import React from 'react'

describe('Hint w/ default values should render correctly', () => {
	beforeEach(() => render(<Hint />))

	it('Container should render correctly', () => {
		const hintEl = screen.getByTestId('hint-component')
		expect(hintEl).toBeInTheDocument()
		expect(hintEl.childNodes.length).toBe(1)

		expect(hintEl.classList.length).toBe(2)
		expect(hintEl.classList.contains('hint-full-width')).toBe(true)
		expect(hintEl.classList.contains('hint-default')).toBe(true)

		expect(hintEl.style.backgroundColor).toBe('rgb(246, 242, 251)')
	})

	it('Hint Text should render correctly', () => {
		const hintTextEl = screen.getByTestId('hint-text')
		expect(hintTextEl).toBeInTheDocument()
		expect(hintTextEl.childNodes.length).toBe(0)

		expect(hintTextEl.classList.contains('hint-text')).toBe(true)
		expect(hintTextEl.classList.contains('MuiTypography-h6')).toBe(true)

		expect(hintTextEl.style.color).toBe('black')
	})
})
