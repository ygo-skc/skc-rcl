import React, { FC, ReactNode } from 'react'
import { Typography } from '@mui/material'

// import '../../../css/card/ygo-card-styles.css'
import '../../css/data-display/section.css'

export type SectionProps = {
	sectionName: string
	children: ReactNode
	sectionHeaderBackground?: 'default' | 'ban-list' | 'product' | ''
	sticky?: boolean
	maxWidth?: string
	shadow?: 'heavy-shadow' | 'light-shadow' | 'no-shadow'
	border?: 'default-border' | 'no-border'
	margin?: 'tight' | 'no' | ''
}

const Section: FC<SectionProps> = ({
	children,
	sectionName,
	sectionHeaderBackground = 'default',
	sticky = false,
	maxWidth = '100%',
	shadow = 'heavy-shadow',
	border = 'no-border',
	margin = 'no-shadow',
}) => {
	let sectionHeaderBackgroundClass = ''

	if (sectionHeaderBackground !== undefined && sectionHeaderBackground !== '') {
		sectionHeaderBackgroundClass =
			sectionHeaderBackground === 'default' || sectionHeaderBackground === 'ban-list' || sectionHeaderBackground === 'product'
				? `${sectionHeaderBackground}-section-header-container`
				: `${sectionHeaderBackground}-ygo-card-style`
	}

	const stickyClass = sticky ? 'sticky' : ''

	return (
		<div style={{ maxWidth: maxWidth }} className={`section-parent ${margin}-margin ${shadow} ${border} ${stickyClass}`}>
			<div className={`section-header-container ${shadow} ${sectionHeaderBackgroundClass}`}>
				<Typography variant='h1' align='center' className='section-header-text'>
					{sectionName}
				</Typography>
			</div>

			{children}
		</div>
	)
}

export default Section
