import React, { FC, ReactNode } from 'react'
import { Typography } from '@mui/material'

import '../../css/data-display/stat-grid.css'

export type SKCStat = {
	label: string
	value: ReactNode
}

export type SKCStatGridProps = {
	stats: SKCStat[]
}

/*
 * A handful of label / value facts (a product's id, type, release...) as one-line tiles that fill as many columns as fit.
 * For tabular data use SKCTable. Text sizes come from the consumer's MUI theme, colours from --skc-stat-grid-* custom properties
 */
const SKCStatGrid: FC<SKCStatGridProps> = ({ stats }) => {
	return (
		<dl className='skc-stat-grid'>
			{stats.map(({ label, value }) => (
				<div key={label} className='skc-stat-grid__stat'>
					<Typography variant='body2' component='dt' className='skc-stat-grid__label'>
						{label}
					</Typography>
					<Typography variant='subtitle2' component='dd' className='skc-stat-grid__value'>
						{value}
					</Typography>
				</div>
			))}
		</dl>
	)
}

export default SKCStatGrid
