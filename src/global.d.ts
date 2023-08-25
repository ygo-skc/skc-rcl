declare module '*.svg'

declare type cardColor =
	| 'normal'
	| 'effect'
	| 'ritual'
	| 'fusion'
	| 'synchro'
	| 'xyz'
	| 'pendulum-normal'
	| 'pendulum-effect'
	| 'pendulum-fusion'
	| 'pendulum-xyz'
	| 'pendulum-synchro'
	| 'token'
	| 'link'
	| 'spell'
	| 'trap'
	| 'err'
	| undefined

declare type SKCMonsterAssociation = {
	level: number
	rank: number
	scaleRating: number
	linkRating: number
	linkArrows: string[]
}

declare type SKCCard = {
	cardID: string
	cardName: string
	cardColor: cardColor
	cardAttribute?: CardAttribute
	monsterType?: string
	monsterAssociation?: SKCMonsterAssociation
	monsterAttack?: string
	monsterDefense?: string
	cardEffect: string
}

declare type CardAttribute = 'dark' | 'earth' | 'fire' | 'light' | 'water' | 'wind' | 'divine' | undefined

declare type DateProps = {
	month: string
	day: number
	year: number
}
