import { render, screen } from '@testing-library/react'
import DateComponent from '../DateComponent'
import React from 'react'

describe('Date Component should render correctly', () => {
	beforeEach(() => render(<DateComponent year={2023} month='Jan' day={25} />))

	it('should render month value correctly', () => {
		const monthEl = screen.getByTestId('date-component-month-text')
		expect(monthEl).toHaveTextContent('Jan')
	})

	it('should render year value correctly', () => {
		const yearEl = screen.getByTestId('date-component-year-text')
		expect(yearEl).toHaveTextContent('2023')
	})

	it('should render day value correctly', () => {
		const dayEl = screen.getByTestId('date-component-day-text')
		expect(dayEl).toHaveTextContent('25')
	})
})
