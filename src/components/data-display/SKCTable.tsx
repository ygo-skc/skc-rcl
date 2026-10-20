import React, { FC, KeyboardEvent, memo } from 'react'
import { TableContainer, Box, TableHead, TableBody, Table, TableCell, TableRow } from '@mui/material'

import '../../css/data-display/table.css'

export type SKCTableProps = {
	header: string[]
	rows: string[][]
	rowActions?: (() => void)[]
	fullWidth?: boolean
}

// counts, ids made of digits, percentages and signed numbers line up on the right; dates and words stay left
const isNumeric = (value: string) => /^[-+]?[\d,]*\.?\d+%?$/.test(value.trim())

const runOnEnterOrSpace = (action: () => void) => (event: KeyboardEvent<HTMLTableRowElement>) => {
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault()
		action()
	}
}

/*
 * Compact table for any tabular data. Text sizes come from the consumer's MUI theme (TableCell), colours from
 * --skc-table-* custom properties. Rows with an action can be clicked or reached with the keyboard
 */
const SKCTable: FC<SKCTableProps> = ({ header, rows, rowActions = [], fullWidth = false }) => {
	// a header lines up with its column when every value under it is numeric
	const numericColumns = header.map((_, column) => rows.length > 0 && rows.every((row) => isNumeric(row[column] ?? '')))

	return (
		<TableContainer className='skc-table' style={fullWidth ? { maxWidth: '100%', margin: '0' } : undefined} component={Box}>
			<Table size='small'>
				{header.length > 0 && (
					<TableHead>
						<TableRow>
							{header.map((column, columnIndex) => (
								<TableCell key={column} scope='col' className={numericColumns[columnIndex] ? 'skc-table__cell--numeric' : undefined}>
									{column}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
				)}
				<TableBody>
					{rows.map((row, rowIndex) => {
						const action = rowActions[rowIndex]
						const cells = row.map((value, columnIndex) => (
							<TableCell key={columnIndex} className={isNumeric(value) ? 'skc-table__cell--numeric' : undefined}>
								{value}
							</TableCell>
						))

						return action === undefined ? (
							<TableRow key={rowIndex}>{cells}</TableRow>
						) : (
							<TableRow key={rowIndex} hover className='skc-table__row--action' tabIndex={0} onClick={action} onKeyDown={runOnEnterOrSpace(action)}>
								{cells}
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default memo(SKCTable, (prevProps, nextProps) => {
	if (
		prevProps.header.length !== nextProps.header.length ||
		prevProps.rows !== nextProps.rows ||
		prevProps.rowActions?.length !== nextProps.rowActions?.length ||
		prevProps.fullWidth !== nextProps.fullWidth
	)
		return false
	return true
})
