import '../../css/data-display/list.css'

import { Link } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import DateBadge from './DateBadge'
import InlineDate from './InlineDate'

export type DatedListItemProps = {
	link: string
	month: string
	day: number
	year: number
	variant?: 'badge' | 'inline'
	children: ReactNode
	className?: string
}

const DatedListItem: FC<DatedListItemProps> = ({ link, month, day, year, variant = 'badge', children, className }) => {
	const classes = link === '' ? `list-item-parent disabled ${className}` : `list-item-parent ${className}`

	return (
		// MUI Link, so a consumer's theme can route it client side (MuiLink defaultProps.component)
		<Link href={link} className={classes} underline='none' color='inherit'>
			{variant === 'badge' ? <DateBadge month={month} day={day} year={year} variant='condensed' /> : <InlineDate month={month} day={day} year={year} />}
			<div className='list-item-text'>{children}</div>
		</Link>
	)
}

export default DatedListItem
