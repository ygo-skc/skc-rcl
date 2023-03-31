import React from 'react'
import LinkPhoto, { LinkPhotoProps } from '../../components/photo/LinkPhoto'

const Template = (args) => <LinkPhoto {...args} />

export default {
	title: 'Photo/LinkPhoto',
	component: LinkPhoto,
}

export const Default = Template.bind({})
Default.args = {
	imageSrc: 'https://images.thesupremekingscastle.com/cards/md/13256226.jpg',
	imageName: 'Elemental HERO Spirit of Neos',
	link: 'https://images.thesupremekingscastle.com/cards/md/13256226.jpg',
} as LinkPhotoProps
