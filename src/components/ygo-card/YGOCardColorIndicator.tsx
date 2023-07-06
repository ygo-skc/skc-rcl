import React, { FC } from 'react'
import '../../css/ygo-card/ygo-card-color-indicator.css'
import '../../css/ygo-card/ygo-card-styles.css'

export type YGOCardColorIndicatorProps = {
	cardColor: cardColor
	variant?: 'small' | 'large'
}

const YGOCardColorIndicator: FC<YGOCardColorIndicatorProps> = ({ cardColor, variant = 'small' }) => {
	return <span className={`${cardColor?.toLocaleLowerCase()}-ygo-card-style indicator ${variant}`} />
}

export default YGOCardColorIndicator
