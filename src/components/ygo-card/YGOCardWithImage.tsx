import React, { FC, Fragment } from 'react'
import YGOCard from './YGOCard'
import CardImageRounded from '../photo/CardImageRounded'

export type YGOCardWithImageProps = {
	card: SKCCard
}

const YGOCardWithImage: FC<YGOCardWithImageProps> = ({ card }) => {
	return (
		<Fragment>
			<CardImageRounded cardImg={`https://images.thesupremekingscastle.com/cards/x-sm/${card.cardID}.jpg`} />

			<YGOCard
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

export default YGOCardWithImage
