import React, { useCallback, useMemo } from 'react';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import type { ColumnsType } from 'antd/es/table';
import { getRoute } from '../saga/routeSaga';
import { TableData } from '../store/dataSlice';

const getColumns = (tableData: TableData[]): ColumnsType<TableData> => [
	{
		title: 'Маршрут',
		dataIndex: 'name',
		width: '120px',
	},
	...[...Array(tableData.reduce((val, row) => (row.points.length > val ? row.points.length : val), 0))].map(
		(v, i) => ({
			title: `Точка ${i + 1} (lat, lng)`,
			dataIndex: ['points', i],
			render: (text: string, record: TableData) => record.points[i]?.join(', '),
		})
	),
];

function DataTable() {
	const tableData = useSelector((state: RootState) => state.data.tableData);
	const dispatch = useDispatch();
	const onChange = useCallback(
		(selectedRowKeys: React.Key[], selectedRows: TableData[]) => {
			if (selectedRows.length > 0) dispatch(getRoute(selectedRows[0]));
		},
		[dispatch]
	);
	const columns = useMemo(() => getColumns(tableData), [tableData]);

	return (
		<>
			<Table
				rowSelection={{
					type: 'radio',
					onChange,
				}}
				columns={columns}
				dataSource={tableData}
				pagination={false}
			/>
		</>
	);
}

export default DataTable;
