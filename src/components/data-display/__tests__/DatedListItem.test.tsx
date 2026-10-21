import { createTheme, ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'
import React, { AnchorHTMLAttributes, forwardRef } from 'react'
import DatedListItem from '../DatedListItem'

// stands in for a consumer's router link (e.g. react-router's Link wired through the MUI theme)
const RouterLinkStub = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(({ href, ...props }, ref) => (
	<a ref={ref} href={href} data-router-link='true' {...props} />
))
RouterLinkStub.displayName = 'RouterLinkStub'

const routerTheme = createTheme({ components: { MuiLink: { defaultProps: { component: RouterLinkStub } } } })

describe('DatedListItem', () => {
	it('links through the theme link component so consumers can route client side', () => {
		render(
			<ThemeProvider theme={routerTheme}>
				<DatedListItem link='/product/BPRO#59581480' month='Jan' day={1} year={2020}>
					Product
				</DatedListItem>
			</ThemeProvider>,
		)

		const link = screen.getByRole('link')
		expect(link).toHaveAttribute('href', '/product/BPRO#59581480')
		expect(link).toHaveAttribute('data-router-link', 'true')
		expect(link).toHaveClass('list-item-parent')
	})

	it('falls back to a plain anchor without a themed link component', () => {
		render(
			<DatedListItem link='/product/BPRO' month='Jan' day={1} year={2020}>
				Product
			</DatedListItem>,
		)

		expect(screen.getByRole('link')).toHaveAttribute('href', '/product/BPRO')
	})
})
