import React, { FC, ReactNode } from 'react'
import { Typography } from '@mui/material'

import '../../css/generic/hint.css'

type HintProps = {
	children?: ReactNode
	backgroundColor?: string
	textColor?: string
	variant?: 'default' | 'tight'
}

const Hint: FC<HintProps> = ({ children, backgroundColor = '#f6f2fb', textColor = 'black', variant = 'default' }) => {
	return (
		<div className={`hint-${variant}`} style={{ backgroundColor: backgroundColor }}>
			<Typography className='hint-text' style={{ color: textColor }} variant='h6' align='center'>
				{children}
			</Typography>
		</div>
	)
}

export default Hint
