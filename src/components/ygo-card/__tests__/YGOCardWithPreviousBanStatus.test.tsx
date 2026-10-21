import { createTheme, ThemeProvider } from '@mui/material'
import { render, screen } from '@testing-library/react'
import React, { AnchorHTMLAttributes, forwardRef } from 'react'
import YGOCardWithPreviousBanStatus from '../YGOCardWithPreviousBanStatus'

// stands in for a consumer's router link (e.g. react-router's Link wired through the MUI theme)
const RouterLinkStub = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(({ href, ...props }, ref) => (
	<a ref={ref} href={href} data-router-link='true' {...props} />
))
RouterLinkStub.displayName = 'RouterLinkStub'

const routerTheme = createTheme({ components: { MuiLink: { defaultProps: { component: RouterLinkStub } } } })

const card: SKCCard = {
	cardID: '59581480',
	cardName: 'Sample Card',
	cardColor: 'effect',
	cardEffect: 'Sample effect',
	cardAttribute: 'dark',
	monsterType: 'Fiend/Effect',
	monsterAttack: '1000',
	monsterDefense: '1000',
}

describe('YGOCardWithPreviousBanStatus', () => {
	it('links to the card through the theme link component so consumers can route client side', () => {
		render(
			<ThemeProvider theme={routerTheme}>
				<YGOCardWithPreviousBanStatus card={card} previousBanStatus='Limited' />
			</ThemeProvider>,
		)

		const link = screen.getByRole('link')
		expect(link).toHaveAttribute('href', '/card/59581480')
		expect(link).toHaveAttribute('data-router-link', 'true')
		expect(link).toHaveClass('ygo-card-previous-status-parent')
	})
})
