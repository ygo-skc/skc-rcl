import React, { FC } from 'react'
import { Typography } from '@mui/material'

import { Dates } from '../../helper/Dates'

import '../../css/data-display/date-component.css'

type DateProps = {
	date: Date
}

const DateComponent: FC<DateProps> = ({ date }) => {
	return (
		<div className='date-parent'>
			<div className='month-container'>
				<Typography variant='h6' align='center' className='month-text'>
					{Dates.getMonth(date)}
				</Typography>
			</div>

			<Typography align='center' variant='h3' className='day-text'>
				{Dates.getDay(date)}
			</Typography>
			<Typography align='center' variant='subtitle2' className='year-text'>
				{Dates.getYear(date)}
			</Typography>
		</div>
	)
}

export default DateComponent
