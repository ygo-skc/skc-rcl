import { Skeleton, Typography } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'
import React, { FC } from 'react'

import '../../../css/data-display/charts/pie.css'

export type data = {
	id: string
	label: string
	value: number
}

export type PieProps = {
	data: data[]
	statName: string
	legendTextColor: 'white' | 'black'
	isDataLoaded: boolean
}

const Pie: FC<PieProps> = ({ data, statName, legendTextColor = 'white', isDataLoaded }) => {
	const margin = 10
	return (
		<div className='pie-parent group-dark'>
			<Typography style={{ color: legendTextColor }} className='pie-header' variant='h2' align='center'>
				{statName}
			</Typography>

			<div className='pie'>
				{isDataLoaded ? (
					<ResponsivePie
						margin={{ top: margin, right: margin * 5, bottom: margin, left: margin }}
						data={data}
						animate={true}
						activeOuterRadiusOffset={4}
						innerRadius={0}
						arcLabelsRadiusOffset={0.6}
						activeInnerRadiusOffset={0}
						layers={['arcs', 'legends', 'arcLabels']}
						colors={{ scheme: 'pastel2' }}
						theme={{
							fontSize: 12,
							fontFamily: 'open sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
						}}
						legends={[
							{
								anchor: 'bottom-right',
								direction: 'column',
								justify: false,
								translateX: margin * 5,
								translateY: -10,
								itemsSpacing: 0,
								itemWidth: 100,
								itemHeight: 20,
								itemTextColor: legendTextColor,
								itemDirection: 'right-to-left',
								itemOpacity: 1,
								symbolSize: 10,
								symbolShape: 'circle',
							},
						]}
					/>
				) : (
					<Skeleton className='rounded-skeleton-light' variant='rectangular' height='100%' width='100%' />
				)}
			</div>
		</div>
	)
}

export default Pie
