import React, { FC } from 'react'
import { Typography } from '@mui/material'

import '../../css/data-display/tile.css'

export type TileProps = {
	total: number
	subject: string
	color: string
	action: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	variant: 'small' | 'medium' | 'large' | 'full-width'
}

const Tile: FC<TileProps> = ({ total, subject, color, action, variant }) => {
	return (
		<div data-testid='tile-component' className={`tile ${variant}`} onClick={action}>
			<Typography data-testid='tile-component-prominent-text' className='tile-prominent-text' variant='h1' align='center'>
				{total.toLocaleString('en')}
			</Typography>
			<Typography data-testid='tile-component-sub-text' variant='h5' align='center' style={{ color: color }}>
				{subject}
			</Typography>
		</div>
	)
}

export default Tile
