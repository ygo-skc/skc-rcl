import { Typography } from '@mui/material'
import React, { FC } from 'react'

import '../../css/generic/glance.css'

export type GlanceProps = {
	total: number
	subject: string
	color: string
	action: any
	variant: 'small' | 'medium' | 'large' | 'full-width'
}

const Glance: FC<GlanceProps> = ({ total, subject, color, action, variant }) => {
	return (
		<div className={`glance ${variant}`} onClick={() => action()}>
			<Typography className='glance-prominent-text' variant='h1' align='center'>
				{total.toLocaleString('en')}
			</Typography>
			<Typography variant='h5' align='center' style={{ color: color }}>
				{subject}
			</Typography>
		</div>
	)
}

export default Glance
