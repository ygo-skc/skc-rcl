import React, { FC, SyntheticEvent, useCallback } from 'react'
import '../../css/photo/rounded-img.css'

export type CardImageRoundedProps = {
	cardID: string
	size: 'original' | 'lg' | 'md' | 'sm' | 'x-sm' | 'tn'
	variant?: 'circle' | 'rounded-rect'
	loading?: 'lazy' | 'eager'
}

const CardImageRounded: FC<CardImageRoundedProps> = ({ cardID, size, variant= 'rounded-rect', loading = 'eager' }) => {
	const onErrorCB = useCallback(
		(e: SyntheticEvent<HTMLImageElement, Event>) => {
			e.currentTarget.src = `https://images.thesupremekingscastle.com/cards/${size}/default-card-image.jpg`
		},
		[cardID, size]
	)

	const className = variant === 'rounded-rect'? 'rounded-img-inner-container' : 'rounded-img-inner-container circle'

	return (
		<div className='rounded-img-outer-container'>
			<div className={className}>
				<img
					className='rounded-img'
					loading={loading}
					role='presentation'
					src={`https://images.thesupremekingscastle.com/cards/${size}/${cardID}.jpg`}
					onError={onErrorCB}
					width='100%'
					height='100%'
					alt={`Card - ${cardID}`}
				/>
			</div>
		</div>
	)
}

export default CardImageRounded
