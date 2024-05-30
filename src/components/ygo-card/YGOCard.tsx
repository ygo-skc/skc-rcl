import React, { FC, Fragment } from 'react'
import YGOCardData from './YGOCardData'
import CardImageRounded from '../photo/CardImageRounded'

export type YGOCardProps = {
	card: SKCCard
	imgLoadingType: 'lazy' | 'eager'
}

const YGOCard: FC<YGOCardProps> = ({ card, imgLoadingType }) => {
	return (
		<Fragment>
			<CardImageRounded cardID={card.cardID} size='x-sm' loading={imgLoadingType} />

			<YGOCardData
				cardName={card.cardName}
				cardColor={card.cardColor}
				cardEffect={card.cardEffect}
				monsterType={card.monsterType}
				cardID={card.cardID}
				fullDetails={false}
				monsterAssociation={card.monsterAssociation}
				cardAttribute={card.cardAttribute}
			/>
		</Fragment>
	)
}

export default YGOCard
