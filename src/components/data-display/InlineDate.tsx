import React, { FC } from 'react'
import { Typography } from '@mui/material'

import '../../css/data-display/inline-date.css'

const InlineDate: FC<DateProps> = ({ month, day, year }) => {
	return (
		<div className='inline-date '>
			<Typography data-testid='date-component-month-text' variant='h5' align='center' className='text month-text'>
				{month}
			</Typography>

			<Typography data-testid='date-component-day-text' align='center' variant='h6' className='text day-text'>
				{day}
			</Typography>

			<Typography data-testid='date-component-year-text' align='center' variant='subtitle1' className='text'>
				{year}
			</Typography>
		</div>
	)
}

export default InlineDate
