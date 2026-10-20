import { render, screen } from '@testing-library/react'
import React from 'react'
import YGOCardAttribute from '../YGOCardAttribute'

describe('Card attribute icon', () => {
	it('shows the icon for a monster attribute, whatever its casing', () => {
		render(<YGOCardAttribute attribute='Dark' />)

		const icon = screen.getByRole('img', { name: 'Dark attribute' })
		expect(icon).toHaveAttribute('src', 'dark.svg')
		expect(icon).toHaveAttribute('title', 'Dark')
	})

	it('shows the spell and trap icons, which those cards use as their attribute', () => {
		render(
			<>
				<YGOCardAttribute attribute='Spell' />
				<YGOCardAttribute attribute='Trap' />
			</>
		)

		expect(screen.getByRole('img', { name: 'Spell attribute' })).toHaveAttribute('src', 'spell.svg')
		expect(screen.getByRole('img', { name: 'Trap attribute' })).toHaveAttribute('src', 'trap.svg')
	})

	it('shows nothing for a missing or unknown attribute', () => {
		const { container } = render(
			<>
				<YGOCardAttribute />
				<YGOCardAttribute attribute='Laugh' />
			</>
		)

		expect(container).toBeEmptyDOMElement()
	})
})
