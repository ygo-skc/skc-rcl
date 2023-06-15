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
		<div data-testid='atk-def-component' className='monster-stat-parent'>
			<div data-testid='atk-def-wrapper' className='monster-stat-sub-parent'>
				<Typography data-testid='atk-text' className='monster-stat monster-attack-stat' variant='body1'>
					{modifyStat(monsterAtk)}
				</Typography>

				{cardColor !== 'Link' ? (
					<Typography data-testid='def-text' className='monster-stat monster-defense-stat' variant='body1'>
						{modifyStat(monsterDef)}
					</Typography>
				) : undefined}
			</div>
		</div>
	)
}

export default AtkDef
