import type { Meta, StoryObj } from '@storybook/react'
import GenericNonBreakingErr from '../../components/data-display/GenericNonBreakingErr'

const meta: Meta<typeof GenericNonBreakingErr> = {
	title: 'Generic/Generic Non Breaking Error',
	component: GenericNonBreakingErr,
	args: {
		errExplanation: 'An API did not return required data.',
	},
}
export default meta

type Story = StoryObj<typeof GenericNonBreakingErr>

export const Default: Story = {}
