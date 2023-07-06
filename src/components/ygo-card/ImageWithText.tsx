import { Typography } from '@mui/material'
import React, { FC, ReactNode } from 'react'

import '../../css/ygo-card/image-with-text.css'

export type ImageWithTextProps = {
	imageComponent?: ReactNode
	text: string
}

const ImageWithText: FC<ImageWithTextProps> = ({ imageComponent, text }) => {
	return (
		<div data-testid='image-with-text-component' className='img-with-number-parent'>
			{imageComponent}
			<Typography data-testid='image-text' variant='subtitle1' textAlign='center'>
				{text}
			</Typography>
		</div>
	)
}

export default ImageWithText
