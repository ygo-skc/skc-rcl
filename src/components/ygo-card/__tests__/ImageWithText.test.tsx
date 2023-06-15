import { render, screen } from '@testing-library/react'
import ImageWithText from '../ImageWithText'
import React from 'react'

describe('Image With Text component should render correctly', () => {
	it('Image With Text Component should render correctly', () => {
		const textStr = 'hello world'
		render(<ImageWithText imageComponent={<img data-testid='image' />} text={textStr} />)

		const parent = screen.getByTestId('image-with-text-component')
		expect(parent).toBeInTheDocument()
		expect(parent.classList.contains('img-with-number-parent')).toBe(true)
		expect(parent.childNodes.length).toBe(2)

		const image = screen.getByTestId('image')
		expect(image).toBeInTheDocument()

		const text = screen.getByTestId('image-text')
		expect(text).toBeInTheDocument()
		expect(text).toHaveTextContent(textStr)
	})
})
