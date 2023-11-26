import React, { FC, SyntheticEvent, startTransition, useCallback, useState } from 'react'
import '../../css/photo/rounded-img.css'
import VizSensor from 'react-visibility-sensor'

export type CardImageRoundedProps = {
	cardID: string
	variant: 'original' | 'large' | 'md' | 'sm' | 'x-sm' | 'tn'
	defaultVisibility?: boolean
}

const CardImageRounded: FC<CardImageRoundedProps> = ({ cardID, variant, defaultVisibility = false }) => {
	const [visible, setVisible] = useState(defaultVisibility)

	const handleVisibility = useCallback((isVisible: boolean) => {
		startTransition(() => {
			if (isVisible !== false) setVisible(isVisible)
		})
	}, [])

	const onErrorCB = useCallback(
		(e: SyntheticEvent<HTMLImageElement, Event>) => {
			e.currentTarget.src = `https://images.thesupremekingscastle.com/cards/${variant}/default-card-image.jpg`
		},
		[cardID, variant]
	)

	return (
		<VizSensor partialVisibility offset={{ bottom: -350, top: -200 }} onChange={handleVisibility}>
			<div id='rounded-img-outer-container'>
				<div id='rounded-img-inner-container'>
					{visible ? (
						<img src={`https://images.thesupremekingscastle.com/cards/${variant}/${cardID}.jpg`} onError={onErrorCB} id='rounded-img' width='100%' height='100%' alt={`Card`} />
					) : undefined}
				</div>
			</div>
		</VizSensor>
	)
}

export default CardImageRounded
