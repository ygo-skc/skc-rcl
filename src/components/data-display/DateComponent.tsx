import React, { FC } from 'react'
import { Typography } from '@mui/material'

import '../../css/data-display/date-component.css'

type DateProps = {
	month: string
	day: number
	year: number
}

const DateComponent: FC<DateProps> = ({ month, day, year }) => {
	return (
		<div className='date-parent'>
			<div className='month-container'>
				<Typography variant='h6' align='center' className='month-text'>
					{month}
				</Typography>
			</div>

			<Typography align='center' variant='h3' className='day-text'>
				{day}
			</Typography>
			<Typography align='center' variant='subtitle2' className='year-text'>
				{year}
			</Typography>
		</div>
	)
}

export default DateComponent
