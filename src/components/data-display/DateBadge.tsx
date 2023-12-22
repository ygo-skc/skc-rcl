import React, { FC } from 'react'
import { Typography } from '@mui/material'

import '../../css/data-display/date-badge.css'

export type DateProps = {
	month: string
	day: number
	year: number
	variant?: 'normal' | 'condensed'
}

const DateBadge: FC<DateProps> = ({ month, day, year, variant = 'normal' }) => {
	return (
		<div data-testid='date-badge-parent' className={variant === 'normal' ? 'date-parent' : 'date-parent date-parent-condensed'}>
			<Typography data-testid='date-badge-month-text' variant={variant === 'normal' ? 'h6' : 'subtitle1'} align='center' className='month-text'>
				{month}
			</Typography>

			<Typography data-testid='date-badge-day-text' align='center' variant={variant === 'normal' ? 'h3' : 'h6'} className='day-text'>
				{day}
			</Typography>

			<Typography data-testid='date-badge-year-text' align='center' variant='subtitle2' className='year-text'>
				{year}
			</Typography>
		</div>
	)
}

export default DateBadge
