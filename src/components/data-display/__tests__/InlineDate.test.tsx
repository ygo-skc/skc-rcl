import { render, screen } from '@testing-library/react'
import InlineDate from '../InlineDate'
import React from 'react'

describe('Inline Date should render correctly', () => {
	beforeEach(() => render(<InlineDate year={2023} month='Jan' day={25} />))

	it('should render month value correctly', () => {
		const dateComponentParentEl = screen.getByTestId('inline-date-parent')
		expect(dateComponentParentEl).toBeInTheDocument()
		expect(dateComponentParentEl.classList.contains('inline-date')).toBe(true)
	})

	it('should render month value correctly', () => {
		const monthEl = screen.getByTestId('inline-date-month-text')
		expect(monthEl).toHaveTextContent('Jan')
		expect(monthEl.nodeName.toLowerCase()).toBe('h6')
	})

	it('should render year value correctly', () => {
		const yearEl = screen.getByTestId('inline-date-year-text')
		expect(yearEl).toHaveTextContent('2023')
		expect(yearEl.nodeName.toLowerCase()).toBe('h6')
	})

	it('should render day value correctly', () => {
		const dayEl = screen.getByTestId('inline-date-day-text')
		expect(dayEl).toHaveTextContent('25')
		expect(dayEl.nodeName.toLowerCase()).toBe('h6')
	})
})
