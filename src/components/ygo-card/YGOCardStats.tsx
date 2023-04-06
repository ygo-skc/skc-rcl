import React, { FC } from 'react'
import { Typography } from '@mui/material'
import AtkDef from './AtkDef'

import '../../css/ygo-card/ygo-card-styles.css'

export type YGOCardStatsProps = Omit<SKCCard, 'cardName'> & {
	fullDetails: boolean
}

const YGOCardStats: FC<YGOCardStatsProps> = ({ cardColor, cardEffect, monsterType, monsterAttack, monsterDefense, cardID, fullDetails }) => {
	const color = cardColor === undefined ? 'Err' : cardColor?.toLowerCase()
	const isBackRow = color === 'spell' || color === 'trap'

	return (
		<div className={`YgoCardDarkText ${cardColor?.toLowerCase()}-ygo-card-style-light`} id='card-description'>
			<Typography variant='body1' id='monster-type' noWrap={true}>
				{isBackRow ? cardColor : monsterType}
			</Typography>

			{!fullDetails ? (
				<Typography className='ygo-card-effect-component-some-details' variant='body2'>
					{cardEffect}
				</Typography>
			) : (
				<Typography className='ygo-card-effect-component-full-details' variant='body2'>
					{cardEffect}
				</Typography>
			)}

			<div className='ygo-card-footer-parent'>
				{fullDetails ? (
					<Typography variant='body2' id='card-id'>
						{cardID}
					</Typography>
				) : undefined}

				{fullDetails && !isBackRow && color !== 'err' && cardColor !== undefined && <AtkDef monsterAtk={monsterAttack} monsterDef={monsterDefense} cardColor={cardColor} />}
			</div>
		</div>
	)
}

export default YGOCardStats
