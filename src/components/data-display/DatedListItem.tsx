import '../../css/data-display/list.css'

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
	return (
		<a href={link} className={`list-item-parent ${className}`}>
			{variant === 'badge' ? <DateBadge month={month} day={day} year={year} variant='condensed' /> : <InlineDate month={month} day={day} year={year} />}
			<div className='list-item-text'>{children}</div>
		</a>
	)
}

export default DatedListItem
