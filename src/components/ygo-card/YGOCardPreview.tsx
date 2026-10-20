import React, { FC, SyntheticEvent, useCallback } from 'react'
import { Chip, Typography } from '@mui/material'

import YGOCardAttribute from './YGOCardAttribute'

import levelImg from '../../img/card_level.svg'
import rankImg from '../../img/card_rank.svg'
import pendulumScaleImg from '../../img/card_pendulum_scale.svg'

import '../../css/ygo-card/ygo-card-preview.css'

// level, rank and pendulum scale as the card page shows them - an icon with a count. only what the card includes is shown
const ASSOCIATION_ICONS = [
	{ key: 'level', label: 'Level', icon: levelImg },
	{ key: 'rank', label: 'Rank', icon: rankImg },
	{ key: 'scaleRating', label: 'Pendulum scale', icon: pendulumScaleImg },
] as const

export type YGOCardPreviewProps = {
	card: SKCCard
}

/*
 * Card glancable preview a user can see to get basic info before clicking it
 */
const YGOCardPreview: FC<YGOCardPreviewProps> = ({ card }) => {
	const showDefaultArt = useCallback((event: SyntheticEvent<HTMLImageElement>) => {
		event.currentTarget.src = 'https://images.thesupremekingscastle.com/cards/md/default-card-image.jpg'
	}, [])

	const color = card.cardColor?.toLowerCase()
	const type = card.monsterType ?? card.cardColor
	const association = card.monsterAssociation

	return (
		<div className='ygo-card-preview'>
			<img className='ygo-card-preview__art' src={`https://images.thesupremekingscastle.com/cards/md/${card.cardID}.jpg`} alt='' onError={showDefaultArt} />
			<Typography variant='h6' component='p' className='ygo-card-preview__name'>
				{card.cardName}
			</Typography>
			<ul className='ygo-card-preview__details' aria-label='Card details'>
				{card.cardAttribute !== undefined && (
					<li className='ygo-card-preview__icon'>
						<YGOCardAttribute attribute={card.cardAttribute} />
					</li>
				)}
				{ASSOCIATION_ICONS.filter(({ key }) => association?.[key] != null).map(({ key, label, icon }) => (
					<li key={key} className='ygo-card-preview__association'>
						<img src={icon} alt={label} title={label} />
						<Typography variant='subtitle2' component='span'>
							x{association?.[key]}
						</Typography>
					</li>
				))}
				{association?.linkRating != null && (
					<Typography variant='subtitle2' component='li' className='ygo-card-preview__association'>
						L{association.linkRating}: {association.linkArrows?.join(' ')}
					</Typography>
				)}
				{type && <Chip component='li' size='small' label={type} className={`ygo-card-preview__type ygo-card-preview__type--${color}`} />}
			</ul>
			{card.monsterAttack != null && (
				<dl className='ygo-card-preview__stats'>
					<Typography variant='caption' component='dt'>
						ATK
					</Typography>
					<Typography variant='subtitle1' component='dd' className='ygo-card-preview__atk'>
						{card.monsterAttack}
					</Typography>
					{/* link monsters have no def */}
					{color !== 'link' && (
						<>
							<Typography variant='caption' component='dt'>
								DEF
							</Typography>
							<Typography variant='subtitle1' component='dd' className='ygo-card-preview__def'>
								{card.monsterDefense ?? '?'}
							</Typography>
						</>
					)}
				</dl>
			)}
			<Typography variant='body2' component='p' className='ygo-card-preview__effect'>
				{card.cardEffect}
			</Typography>
		</div>
	)
}

export default YGOCardPreview
