import { Chip } from '@mui/material'
import React, { FC, Fragment } from 'react'
import CardImageRounded from '../photo/CardImageRounded'
import YGOCardData from './YGOCardData'

import '../../css/ygo-card/ygo-card-with-quantity.css'

export type YGOCardWithQuantityProps = {
	card: SKCCard
	occurrences: number
}

const YGOCardWithQuantity: FC<YGOCardWithQuantityProps> = ({ card, occurrences }) => {
	return (
		<Fragment>
			<div className='header'>
				<CardImageRounded cardID={card.cardID} size='tn' variant='circle' loading='lazy' />
				<div className='quantity-text-container'>
					<Chip className='quantity-chip' key={card.cardID} label={`${occurrences} Reference(s)`} />
				</div>
			</div>

			<YGOCardData
				cardID={card.cardID}
				cardName={card.cardName}
				cardColor={card.cardColor}
				cardEffect={card.cardEffect}
				monsterType={card.monsterType}
				cardAttribute={card.cardAttribute}
				monsterAttack={card.monsterAttack}
				monsterDefense={card.monsterDefense}
				monsterAssociation={card.monsterAssociation}
				fullDetails={false}
			/>
		</Fragment>
	)
}

export default YGOCardWithQuantity
