import React, { FC, startTransition, useCallback, useState } from 'react'
import '../../css/photo/rounded-img.css'
import VizSensor from 'react-visibility-sensor'

export type CardImageRoundedProps = {
	cardID: string
	variant: 'original' | 'large' | 'md' | 'sm' | 'x-sm' | 'tn'
	defaultVisibility?: boolean
}

const CardImageRounded: FC<CardImageRoundedProps> = ({ cardID: cardId, variant, defaultVisibility = false }) => {
	const [visible, setVisible] = useState(defaultVisibility)

	const handleVisibility = useCallback((isVisible: boolean) => {
		startTransition(() => {
			if (isVisible !== false) setVisible(isVisible)
		})
	}, [])

	return (
		<VizSensor partialVisibility offset={{ bottom: -350, top: -200 }} onChange={handleVisibility}>
			<div id='rounded-img-outer-container'>
				<div id='rounded-img-inner-container'>
					{visible ? <img src={`https://images.thesupremekingscastle.com/cards/${variant}/${cardId}.jpg`} id='rounded-img' width='100%' height='100%' alt={`Card`} /> : undefined}
				</div>
			</div>
		</VizSensor>
	)
}

export default CardImageRounded
