import React, { FC } from 'react'

import '../../css/photo/link-photo.css'

export type LinkPhotoProps = {
	imageSrc: string
	imageName: string
	link: string
}

const LinkPhoto: FC<LinkPhotoProps> = ({ imageSrc, imageName, link }) => {
	return (
		<img
			className='generic-link-photo'
			alt={`${imageName} - Click To Navigate To ${link}`}
			src={imageSrc}
			onClick={() => {
				const w = window.open(link, '_blank')!
				w.focus()
			}}
		/>
	)
}

export default LinkPhoto
