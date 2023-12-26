import '../../css/data-display/list.css'

import React, { FC, ReactNode } from 'react'
import DateBadge from './DateBadge'

export type DatedListItemProps = {
	link: string
	month: string
	day: number
	year: number
	children: ReactNode
}

const DatedListItem: FC<DatedListItemProps> = ({ link, month, day, year, children }) => {
	return (
		<a href={link} className='list-item-parent'>
			<DateBadge month={month} day={day} year={year} variant='condensed' />
			<div className='list-item-text'>{children}</div>
		</a>
	)
}

export default DatedListItem
