import React, { FC, ReactNode } from 'react'
import { Typography } from '@mui/material'

import '../../css/generic/hint.css'

type HintProps = {
	children?: ReactNode
	backgroundColor?: string
	textColor?: string
	variant?: 'default' | 'tight'
	fullWidth?: boolean
}

const Hint: FC<HintProps> = ({ children, backgroundColor = '#f6f2fb', textColor = 'black', variant = 'default', fullWidth = true }) => {
	const className = fullWidth ? `hint-full-width hint-${variant}` : `hint hint-${variant}`
	const typographyVariant = variant === 'tight' ? 'subtitle1' : 'h6'
	return (
		<div className={className} style={{ backgroundColor: backgroundColor }}>
			<Typography className='hint-text' style={{ color: textColor }} variant={typographyVariant} align='center'>
				{children}
			</Typography>
		</div>
	)
}

export default Hint
