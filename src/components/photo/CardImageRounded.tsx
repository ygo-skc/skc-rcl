import React, { FC, SyntheticEvent, useCallback } from 'react'
import '../../css/photo/rounded-img.css'

export type CardImageRoundedProps = {
	cardID: string
	variant: 'original' | 'lg' | 'md' | 'sm' | 'x-sm' | 'tn'
	loading?: 'lazy' | 'eager'
}

const CardImageRounded: FC<CardImageRoundedProps> = ({ cardID, variant, loading = 'eager' }) => {
	const onErrorCB = useCallback(
		(e: SyntheticEvent<HTMLImageElement, Event>) => {
			e.currentTarget.src = `https://images.thesupremekingscastle.com/cards/${variant}/default-card-image.jpg`
		},
		[cardID, variant]
	)

	return (
		<div id='rounded-img-outer-container'>
			<div id='rounded-img-inner-container'>
				<img
					loading={loading}
					role='presentation'
					src={`https://images.thesupremekingscastle.com/cards/${variant}/${cardID}.jpg`}
					onError={onErrorCB}
					id='rounded-img'
					width='100%'
					height='100%'
					alt={`Card - ${cardID}`}
				/>
			</div>
		</div>
	)
}

export default CardImageRounded
