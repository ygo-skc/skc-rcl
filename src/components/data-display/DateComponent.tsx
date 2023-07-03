import React, { FC } from 'react'
import { Typography } from '@mui/material'

import '../../css/data-display/date-component.css'

const DateComponent: FC<DateProps> = ({ month, day, year }) => {
	return (
		<div className='date-parent'>
			<div className='month-container'>
				<Typography data-testid='date-component-month-text' variant='h6' align='center' className='month-text'>
					{month}
				</Typography>
			</div>

			<Typography data-testid='date-component-day-text' align='center' variant='h3' className='day-text'>
				{day}
			</Typography>
			<Typography data-testid='date-component-year-text' align='center' variant='subtitle2' className='year-text'>
				{year}
			</Typography>
		</div>
	)
}

export default DateComponent
