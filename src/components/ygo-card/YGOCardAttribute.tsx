import React, { FC } from 'react'

import darkImg from '../../img/dark.svg'
import earthImg from '../../img/earth.svg'
import fireImg from '../../img/fire.svg'
import lightImg from '../../img/light.svg'
import waterImg from '../../img/water.svg'
import windImg from '../../img/wind.svg'
import divineImg from '../../img/divine.svg'
import spellImg from '../../img/spell.svg'
import trapImg from '../../img/trap.svg'

import '../../css/ygo-card/ygo-card-attribute.css'

const ATTRIBUTE_ICONS: Record<string, string> = {
	dark: darkImg,
	earth: earthImg,
	fire: fireImg,
	light: lightImg,
	water: waterImg,
	wind: windImg,
	divine: divineImg,
	spell: spellImg,
	trap: trapImg,
}

export type YGOCardAttributeProps = {
	attribute?: string
}

/*
 * A card's attribute as its icon. The api sends attributes capitalised (Dark), so any casing is accepted
 */
const YGOCardAttribute: FC<YGOCardAttributeProps> = ({ attribute }) => {
	const icon = attribute === undefined ? undefined : ATTRIBUTE_ICONS[attribute.toLowerCase()]
	if (icon === undefined) return null

	return <img className='ygo-card-attribute' src={icon} alt={`${attribute} attribute`} title={attribute} />
}

export default YGOCardAttribute
