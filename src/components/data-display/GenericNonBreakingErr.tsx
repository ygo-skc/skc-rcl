import React, { FC, ReactElement } from 'react'
import { Typography } from '@mui/material'

import '../../css/data-display/generic-non-breaking-err.css'

export type GenericNonBreakingErrProps = {
	errExplanation: string
}

const GenericNonBreakingErr: FC<GenericNonBreakingErrProps> = ({ errExplanation }): ReactElement => {
	return (
		<div data-testid='generic-non-breaking-err-component' className='error-parent'>
			<Typography data-testid='generic-non-breaking-err-component-icon' className='error-icon-text' align='center' variant='h5'>
				⚠️
			</Typography>
			<Typography data-testid='generic-non-breaking-err-component-header' align='center' variant='h5'>
				There Was An Error Fetching Required Data
			</Typography>
			<Typography data-testid='generic-non-breaking-err-component-sub-header' align='center' variant='h6'>
				{errExplanation}
			</Typography>
		</div>
	)
}

export default GenericNonBreakingErr
