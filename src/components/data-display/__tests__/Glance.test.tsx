import { fireEvent, render, screen } from '@testing-library/react'
import Glance from '../Glance'
import React from 'react'

const total = 100
const subject = 'Pencils'
const color = 'rgb(255, 0, 100)'
const action = jest.fn()
const variant = 'small'

describe('Glance should render correctly', () => {
	beforeEach(() => render(<Glance total={total} subject={subject} color={color} action={action} variant={variant} />))

	it('Container should render correctly', () => {
		const glanceEl = screen.getByTestId('glance-component')
		expect(glanceEl).toBeInTheDocument()
		expect(glanceEl.childNodes.length).toBe(2)

		expect(glanceEl.classList.contains(variant)).toBe(true)
		expect(glanceEl.classList.contains('glance')).toBe(true)

		fireEvent.click(glanceEl)
		expect(action).toHaveBeenCalledTimes(1)
	})

	it('Prominent Text should render correctly', () => {
		const glanceEl = screen.getByTestId('glance-component-prominent-text')
		expect(glanceEl).toBeInTheDocument()

		expect(glanceEl.classList.contains('glance-prominent-text')).toBe(true)

		expect(glanceEl).toHaveTextContent('100')
	})

	it('Sub Text should render correctly', () => {
		const glanceEl = screen.getByTestId('glance-component-sub-text')
		expect(glanceEl).toBeInTheDocument()

		expect(glanceEl.style.color).toBe(color)

		expect(glanceEl).toHaveTextContent(subject)
	})
})
