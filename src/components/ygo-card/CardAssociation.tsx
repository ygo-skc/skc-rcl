import React, { FC, ReactElement } from 'react'
import ImageWithNumber from './ImageWithText'

import levelImg from '../../img/card_level.svg'
import rankImg from '../../img/card_rank.svg'
import pendulumScaleImg from '../../img/card_pendulum_scale.svg'

import darkImg from '../../img/dark.svg'
import earthImg from '../../img/earth.svg'
import fireImg from '../../img/fire.svg'
import lightImg from '../../img/light.svg'
import waterImg from '../../img/water.svg'
import windImg from '../../img/wind.svg'

import '../../css/ygo-card/card-association.css'

export type CardAssociationProps = {
	monsterAssociation?: SKCMonsterAssociation
	attribute?: CardAttribute
}

const CardAssociation: FC<CardAssociationProps> = ({ monsterAssociation, attribute }) => {
	if (monsterAssociation === undefined) return null
	if (monsterAssociation.level === undefined && monsterAssociation.rank === undefined && monsterAssociation.linkRating === undefined) return null

	const getMonsterAssociationImage = (monsterAssociation: 'level' | 'rank' | 'pendulum'): ReactElement => {
		switch (monsterAssociation) {
			case 'level':
				return <img src={levelImg} alt='Card Level' className='base-img' />
			case 'rank':
				return <img src={rankImg} alt='Card Rank' className='base-img' />
			case 'pendulum':
				return <img src={pendulumScaleImg} alt='Card Rank' className='pend-img' />
		}
	}

	const getAttributeImage = (attribute: CardAttribute): ReactElement | undefined => {
		switch (attribute) {
			case 'dark':
				return <img src={darkImg} alt='Card Level' className='base-img' />
			case 'earth':
				return <img src={earthImg} alt='Card Rank' className='base-img' />
			case 'fire':
				return <img src={fireImg} alt='Card Rank' className='pend-img' />
			case 'light':
				return <img src={lightImg} alt='Card Rank' className='pend-img' />
			case 'water':
				return <img src={waterImg} alt='Card Rank' className='pend-img' />
			case 'wind':
				return <img src={windImg} alt='Card Rank' className='pend-img' />
			case undefined:
			default:
				return undefined
		}
	}

	return (
		<div className='card-association-parent'>
			<div className='card-association-sub-parent'>
				{getAttributeImage(attribute?.toLowerCase() as CardAttribute)}

				{monsterAssociation.level !== undefined && <ImageWithNumber imageComponent={getMonsterAssociationImage('level')} text={`x${monsterAssociation.level}`} />}
				{monsterAssociation.rank !== undefined && <ImageWithNumber imageComponent={getMonsterAssociationImage('rank')} text={`x${monsterAssociation.rank}`} />}
				{monsterAssociation.scaleRating !== undefined && <ImageWithNumber imageComponent={getMonsterAssociationImage('pendulum')} text={`x${monsterAssociation.scaleRating}`} />}
				{monsterAssociation.linkRating !== undefined && <ImageWithNumber text={`L${monsterAssociation.linkRating}: ${monsterAssociation.linkArrows.join(' ')}`} />}
			</div>
		</div>
	)
}

export default CardAssociation
