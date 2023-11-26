import React, { FC, useCallback } from 'react'

import '../../css/photo/link-photo.css'

export type LinkPhotoProps = {
	imageSrc: string
	imageName: string
	link: string
}

const LinkPhoto: FC<LinkPhotoProps> = ({ imageSrc, imageName, link }) => {
	const imgClickCB = useCallback(() => {
		const w = window.open(link, '_blank')
		w?.focus()
	}, [link])

	const keyClickedCB = useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>) => {
			if (event.key == 'Enter') {
				imgClickCB()
			}
		},
		[imgClickCB]
	)

	return <img className='generic-link-photo' alt={`${imageName} - Click To Navigate To ${link}`} src={imageSrc} onClick={imgClickCB} onKeyDown={keyClickedCB} />
}

export default LinkPhoto
