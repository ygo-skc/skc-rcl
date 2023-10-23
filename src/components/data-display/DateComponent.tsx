import React, { FC } from 'react'
import { Typography } from '@mui/material'

import '../../css/data-display/date-component.css'

export type DateProps = {
	month: string
	day: number
	year: number
	variant: 'normal' | 'condensed'
}

const DateComponent: FC<DateProps> = ({ month, day, year, variant = 'normal' }) => {
	return (
		<div className={variant === 'normal' ? 'date-parent' : 'date-parent date-parent-condensed'}>
			<Typography data-testid='date-component-month-text' variant={variant === 'normal' ? 'h6' : 'subtitle1'} align='center' className='month-text'>
				{month}
			</Typography>

			<Typography data-testid='date-component-day-text' align='center' variant={variant === 'normal' ? 'h3' : 'h6'} className='day-text'>
				{day}
			</Typography>

			<Typography data-testid='date-component-year-text' align='center' variant='subtitle2' className='year-text'>
				{year}
			</Typography>
		</div>
	)
}

export default DateComponent
