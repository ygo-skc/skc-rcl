import React, { FC } from 'react'
import { Typography } from '@mui/material'

import '../../css/data-display/inline-date.css'

export type DateProps = {
	month: string
	day: number
	year: number
}

const InlineDate: FC<DateProps> = ({ month, day, year }) => {
	return (
		<div data-testid='inline-date-parent' className='inline-date'>
			<Typography data-testid='inline-date-month-text' variant='subtitle1' className='text month-text'>
				{month}
			</Typography>

			<Typography data-testid='inline-date-day-text' variant='subtitle1' className='text day-text'>
				{day}
			</Typography>

			<Typography data-testid='inline-date-year-text' variant='subtitle1' className='text year-text'>
				{year}
			</Typography>
		</div>
	)
}

export default InlineDate
