import { Typography } from '@mui/material'
import React, { FC } from 'react'

import '../../css/generic/glance.css'

type _Glance = {
	total: number
	subject: string
	color: string
	action: any
}

const Glance: FC<_Glance> = ({ total, subject, color, action }) => {
	return (
		<div className='glance' onClick={() => action()}>
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
