import React, { FC } from 'react'
import { Typography } from '@mui/material'

import '../../css/data-display/glance.css'

export type GlanceProps = {
	total: number
	subject: string
	color: string
	action: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	variant: 'small' | 'medium' | 'large' | 'full-width'
}

const Glance: FC<GlanceProps> = ({ total, subject, color, action, variant }) => {
	return (
		<div className={`glance ${variant}`} onClick={action}>
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
