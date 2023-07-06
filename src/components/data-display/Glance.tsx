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
		<div data-testid='glance-component' className={`glance ${variant}`} onClick={action}>
			<Typography data-testid='glance-component-prominent-text' className='glance-prominent-text' variant='h1' align='center'>
				{total.toLocaleString('en')}
			</Typography>
			<Typography data-testid='glance-component-sub-text' variant='h5' align='center' style={{ color: color }}>
				{subject}
			</Typography>
		</div>
	)
}

export default Glance
