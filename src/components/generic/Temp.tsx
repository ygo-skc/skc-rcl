import React, { FC } from 'react'
import '../../css/styles.css'

declare type Props = {
	name: string
}

const Topic: FC<Props> = ({ name }) => {
	return (
		<div>
			<p className='hi'>{name}</p>
		</div>
	)
}

export default Topic
