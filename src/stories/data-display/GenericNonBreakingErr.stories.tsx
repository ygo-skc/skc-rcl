import React from 'react'

import GenericNonBreakingErr, { GenericNonBreakingErrProps } from '../../components/data-display/GenericNonBreakingErr'

const Template = (args: GenericNonBreakingErrProps) => <GenericNonBreakingErr {...args} />

export default {
	title: 'Generic/GenericNonBreakingErr',
	component: GenericNonBreakingErr,
}

export const Small = Template.bind({})
Small.args = {
	errExplanation: 'An API did not return required data.',
} as GenericNonBreakingErrProps
