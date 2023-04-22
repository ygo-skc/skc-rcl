import React, { FC, memo } from 'react'

import { Typography, Skeleton } from '@mui/material'
import CardAssociation from './CardAssociation'
import YGOCardStats from './YGOCardStats'

import '../../css/ygo-card/ygo-card-styles.css'

export type YGOCardDataProps = SKCCard & {
	fullDetails: boolean
	isLoading?: boolean
	className?: string
}

/* eslint-disable react/display-name */
const YGOCardData: FC<YGOCardDataProps> = ({
	cardName,
	cardColor,
	cardEffect,
	monsterType,
	cardAttribute,
	monsterAttack,
	monsterDefense,
	monsterAssociation,
	cardID,
	fullDetails,
	isLoading,
	className,
}) => {
	if (isLoading) {
		return <Skeleton variant='rectangular' height='150px' className='rounded-skeleton' />
	}

	return (
		<div className={[className, 'ygo-card-style-base', `${cardColor?.toLowerCase()}-ygo-card-style`, 'YgoCardLightText'].join(' ')}>
			<Typography variant='subtitle1' id='card-name' noWrap={true}>
				{cardName}
			</Typography>

			<CardAssociation monsterAssociation={monsterAssociation} attribute={cardAttribute} />

			<YGOCardStats
				cardColor={cardColor}
				cardEffect={cardEffect}
				monsterType={monsterType}
				monsterAttack={monsterAttack}
				monsterDefense={monsterDefense}
				cardID={cardID}
				fullDetails={fullDetails}
			/>
		</div>
	)
}

export default memo(YGOCardData, (prevProps, newProps) => {
	if (prevProps.cardName !== newProps.cardName) return false
	return true
})
