import { render, screen } from '@testing-library/react'
import GenericNonBreakingErr from '../GenericNonBreakingErr'
import React from 'react'

const errExplanation = 'This is a test'

describe('GenericNonBreakingErr should render correctly', () => {
	beforeEach(() => render(<GenericNonBreakingErr errExplanation={errExplanation} />))

	it('Container should render correctly', () => {
		const genericNonBreakingErrEl = screen.getByTestId('generic-non-breaking-err-component')
		expect(genericNonBreakingErrEl).toBeInTheDocument()
		expect(genericNonBreakingErrEl.classList.contains('error-parent')).toBe(true)
	})

	it('Icon should render correctly', () => {
		const iconEl = screen.getByTestId('generic-non-breaking-err-component-icon')
		expect(iconEl).toBeInTheDocument()
		expect(iconEl).toHaveTextContent('⚠️')
	})

	it('Header should render correctly', () => {
		const headerEl = screen.getByTestId('generic-non-breaking-err-component-header')
		expect(headerEl).toBeInTheDocument()
		expect(headerEl).toHaveTextContent('There Was An Error Fetching Required Data')
	})

	it('SubHeader should render correctly', () => {
		const subHeaderEl = screen.getByTestId('generic-non-breaking-err-component-sub-header')
		expect(subHeaderEl).toBeInTheDocument()
		expect(subHeaderEl).toHaveTextContent(errExplanation)
	})
})
