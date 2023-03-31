import { Typography } from '@mui/material'
import React, { FC, ReactNode } from 'react'

import '../../css/ygo-card/image-with-text.css'

export type ImageWithTextProps = {
	imageComponent?: ReactNode
	text: string
}

const ImageWithText: FC<ImageWithTextProps> = ({ imageComponent, text }) => {
	return (
		<div className='img-with-number-parent'>
			{imageComponent}
			<Typography variant='subtitle1' textAlign='center'>
				{text}
			</Typography>
		</div>
	)
}

export default ImageWithText
