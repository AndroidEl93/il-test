import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NotificationConfig } from '../components/Notification';

export interface TableData {
	key: React.Key;
	name: string;
	points: number[][];
}
export interface MapData {
	route: number[][];
	points: number[][];
}
export interface DataState {
	tableData: TableData[];
	mapData: MapData;
	notification?: NotificationConfig;
}

const initialState: DataState = {
	mapData: {
		route: [],
		points: [],
	},
	tableData: [
		{
			key: 1,
			name: 'Маршрут №1',
			points: [
				[59.84660399, 30.29496392],
				[59.82934196, 30.42423701],
				[59.83567701, 30.38064206],
			],
		},
		{
			key: 2,
			name: 'Маршрут №2',
			points: [
				[59.82934196, 30.42423701],
				[59.82761295, 30.41705607],
				[59.84660399, 30.29496392],
			],
		},
		{
			key: 3,
			name: 'Маршрут №3',
			points: [
				[59.83567701, 30.38064206],
				[59.84660399, 30.29496392],
				[59.82761295, 30.41705607],
			],
		},
	],
};

export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setRoute: (state, action: PayloadAction<MapData>) => {
			state.mapData = action.payload;
		},
		setNottiification: (state, action: PayloadAction<NotificationConfig>) => {
			state.notification = action.payload;
		},
	},
});

export const { setRoute, setNottiification } = dataSlice.actions;

export default dataSlice.reducer;
