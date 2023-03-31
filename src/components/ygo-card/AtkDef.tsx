import { Typography } from '@mui/material'
import React, { FC } from 'react'

import '../../css/ygo-card/atk-def.css'

const modifyStat = (stat: string | undefined) => {
	if (stat === undefined) return '?'
	return stat
}

export type AtkDefProps = {
	monsterAtk?: string
	monsterDef?: string
	cardColor: string
}

const AtkDef: FC<AtkDefProps> = ({ monsterAtk, monsterDef, cardColor }) => {
	return (
		<div className='monster-stat-parent'>
			<div className='monster-stat-sub-parent'>
				<Typography className='monster-stat monster-attack-stat' variant='body1'>
					{modifyStat(monsterAtk)}
				</Typography>

				{cardColor !== 'Link' ? (
					<Typography className='monster-stat monster-defense-stat' variant='body1'>
						{modifyStat(monsterDef)}
					</Typography>
				) : undefined}
			</div>
		</div>
	)
}

export default AtkDef
