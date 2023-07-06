import type { Meta, StoryObj } from '@storybook/react'
import LinkPhoto from '../../components/photo/LinkPhoto'

const meta: Meta<typeof LinkPhoto> = {
	title: 'Photo/Link Photo',
	component: LinkPhoto,
	args: {
		imageSrc: 'https://images.thesupremekingscastle.com/cards/md/13256226.jpg',
		imageName: 'Elemental HERO Spirit of Neos',
		link: 'https://images.thesupremekingscastle.com/cards/md/13256226.jpg',
	},
}
export default meta

type Story = StoryObj<typeof LinkPhoto>

export const Default: Story = {}
