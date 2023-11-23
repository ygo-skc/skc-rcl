import { render, screen } from '@testing-library/react'
import DateComponent from '../DateComponent'
import React from 'react'

describe('Date Component (normal variant) should render correctly', () => {
	beforeEach(() => render(<DateComponent year={2023} month='Jan' day={25} />))

	it('should render month value correctly', () => {
		const dateComponentParentEl = screen.getByTestId('date-component-parent')
		expect(dateComponentParentEl).toBeInTheDocument()
		expect(dateComponentParentEl.classList.contains('date-parent')).toBe(true)
		expect(dateComponentParentEl.classList.contains('date-parent-condensed')).toBe(false)
	})

	it('should render month value correctly', () => {
		const monthEl = screen.getByTestId('date-component-month-text')
		expect(monthEl).toHaveTextContent('Jan')
		expect(monthEl.nodeName.toLowerCase()).toBe('h6')
	})

	it('should render year value correctly', () => {
		const yearEl = screen.getByTestId('date-component-year-text')
		expect(yearEl).toHaveTextContent('2023')
		expect(yearEl.nodeName.toLowerCase()).toBe('h6')
	})

	it('should render day value correctly', () => {
		const dayEl = screen.getByTestId('date-component-day-text')
		expect(dayEl).toHaveTextContent('25')
		expect(dayEl.nodeName.toLowerCase()).toBe('h3')
	})
})

describe('Date Component (condensed variant) should render correctly', () => {
	beforeEach(() => render(<DateComponent year={2023} month='Jan' day={25} variant='condensed' />))

	it('should render month value correctly', () => {
		const dateComponentParentEl = screen.getByTestId('date-component-parent')
		expect(dateComponentParentEl).toBeInTheDocument()
		expect(dateComponentParentEl.classList.contains('date-parent')).toBe(true)
		expect(dateComponentParentEl.classList.contains('date-parent-condensed')).toBe(true)
	})

	it('should render month value correctly', () => {
		const monthEl = screen.getByTestId('date-component-month-text')
		expect(monthEl).toHaveTextContent('Jan')
		expect(monthEl.nodeName.toLowerCase()).toBe('h6')
	})

	it('should render year value correctly', () => {
		const yearEl = screen.getByTestId('date-component-year-text')
		expect(yearEl).toHaveTextContent('2023')
		expect(yearEl.nodeName.toLowerCase()).toBe('h6')
	})

	it('should render day value correctly', () => {
		const dayEl = screen.getByTestId('date-component-day-text')
		expect(dayEl).toHaveTextContent('25')
		expect(dayEl.nodeName.toLowerCase()).toBe('h6')
	})
})
