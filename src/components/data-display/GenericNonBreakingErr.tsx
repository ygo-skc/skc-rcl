import React, { FC, ReactElement } from 'react'
import { Typography } from '@mui/material'

import '../../css/data-display/generic-non-breaking-err.css'

export type GenericNonBreakingErrProps = {
	errExplanation: string
}

const GenericNonBreakingErr: FC<GenericNonBreakingErrProps> = ({ errExplanation }): ReactElement => {
	return (
		<div className='error-parent'>
			<Typography className='error-icon-text' align='center' variant='h5'>
				⚠️
			</Typography>
			<Typography align='center' variant='h5'>
				There Was An Error Fetching Required Data
			</Typography>
			<Typography align='center' variant='h6'>
				{errExplanation}
			</Typography>
		</div>
	)
}

export default GenericNonBreakingErr
