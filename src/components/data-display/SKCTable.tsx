import React, { FC, memo, useCallback } from 'react'
import { TableContainer, Box, TableHead, TableBody, Table, TableCell, TableRow } from '@mui/material'

import '../../css/data-display/table.css'

export type SKCTableProps = {
	header: string[]
	rows: string[][]
	rowActions?: { (): void }[]
	fullWidth?: boolean
}

const SKCTable: FC<SKCTableProps> = ({ header, rows, rowActions = [], fullWidth = false }) => {
	const createHeaderRow = useCallback((): JSX.Element => {
		const columns = header.map((header: string) => {
			return <TableCell key={header}>{header}</TableCell>
		})

		return (
			<TableRow key='header' className='no-hover'>
				{columns}
			</TableRow>
		)
	}, [header])

	const createRows = useCallback((): JSX.Element[] => {
		return rows.map((row: string[], index: number) => {
			const columns: JSX.Element[] = row.map((columnValue: string) => {
				return <TableCell key={columnValue}>{columnValue}</TableCell>
			})

			const rowKey = row.toString()

			return rowActions.length === 0 ? (
				<TableRow className='no-hover' key={rowKey}>
					{columns}
				</TableRow>
			) : (
				<TableRow className='hover' key={rowKey} onClick={rowActions[index]}>
					{columns}
				</TableRow>
			)
		})
	}, [rowActions, rows])

	return (
		<TableContainer className={'table-container'} style={fullWidth ? { maxWidth: '100%', margin: '0' } : undefined} component={Box}>
			<Table size='small'>
				<TableHead className={'table-head'}>{createHeaderRow()}</TableHead>
				<TableBody>{createRows()}</TableBody>
			</Table>
		</TableContainer>
	)
}

export default memo(SKCTable, (prevProps, nextProps) => {
	if (
		prevProps.header.length !== nextProps.header.length ||
		prevProps.rows.length !== nextProps.rows.length ||
		prevProps.rowActions?.length !== nextProps.rowActions?.length ||
		prevProps.fullWidth !== nextProps.fullWidth
	)
		return false
	return true
})
