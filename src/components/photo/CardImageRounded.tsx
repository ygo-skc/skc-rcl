import React, { FC, startTransition, useCallback, useState } from 'react'
import '../../css/photo/rounded-img.css'
import VizSensor from 'react-visibility-sensor'

export type CardImageRoundedProps = {
	cardImg: string
	defaultVisibility?: boolean
}

const CardImageRounded: FC<CardImageRoundedProps> = ({ cardImg, defaultVisibility = false }) => {
	const [visible, setVisible] = useState(defaultVisibility)

	const handleVisibility = useCallback((isVisible: boolean) => {
		startTransition(() => {
			if (isVisible !== false) setVisible(isVisible)
		})
	}, [])

	return (
		<VizSensor partialVisibility offset={{ bottom: -350, top: -200 }} onChange={handleVisibility}>
			<div id='rounded-img-outer-container'>
				<div id='rounded-img-inner-container'>{visible ? <img loading='lazy' src={cardImg} id='rounded-img' width='100%' height='100%' alt={`Card`} /> : undefined}</div>
			</div>
		</VizSensor>
	)
}

export default CardImageRounded
