import { Typography } from '@mui/material'
import React, { FC } from 'react'
import CardImageRounded from '../photo/CardImageRounded'
import YGOCardData from './YGOCardData'

import '../../css/ygo-card/ygo-card-with-previous-ban-status.css'

export type YGOCardWithPreviousBanStatusProps = {
	card: SKCCard
	previousBanStatus: string
}

const YGOCardWithPreviousBanStatus: FC<YGOCardWithPreviousBanStatusProps> = ({ card, previousBanStatus }) => {
	return (
		<div onClick={() => window.location.assign(`/card/${card.cardID}`)} className='ygo-card-info-parent'>
			<div className='img-and-previous-status-parent'>
				<CardImageRounded cardImg={`https://images.thesupremekingscastle.com/cards/tn/${card.cardID}.jpg`} />
				<div className='ban-list-status-change-text-parent'>
					<Typography align='right' variant='h5' className='ban-list-status-change-text-1'>
						Previously
					</Typography>
					<Typography align='right' variant='h6' className='ban-list-status-change-text-2'>
						{previousBanStatus}
					</Typography>
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
		</div>
	)
}

export default YGOCardWithPreviousBanStatus
