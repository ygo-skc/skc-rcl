import React, { FC, Fragment } from 'react'
import YGOCardData from './YGOCardData'
import CardImageRounded from '../photo/CardImageRounded'

export type YGOCardProps = {
	card: SKCCard
}

const YGOCard: FC<YGOCardProps> = ({ card }) => {
	return (
		<Fragment>
			<CardImageRounded cardID={card.cardID} variant='x-sm' />

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
