import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { getRouteFromOSRM, ResponseOsrmAPI } from '../httpServices/osrmAPI';
import { setNottiification, setRoute, TableData } from '../store/dataSlice';

const GET_ROUTE = 'GET_ROUTE';
export const getRoute = createAction<TableData>(GET_ROUTE);

function* getRouteWorker(action: PayloadAction<TableData>) {
	const points = action.payload.points;
	yield put(setRoute({ points, route: [] }));
	yield put(setNottiification({ type: 'info', message: 'Построение маршрута' }));
	const response: ResponseOsrmAPI = yield getRouteFromOSRM(points);
	if (response.success) {
		const route = response.data || [];
		yield put(setRoute({ points, route }));
		yield put(setNottiification({ type: 'success', message: 'Маршрут построен' }));
	} else {
		yield put(
			setNottiification({
				type: 'error',
				message: 'Ошибка построения маршрута',
				description: response.errorMessage,
			})
		);
	}
}

export function* getRouteWatcher() {
	yield takeLatest(GET_ROUTE, getRouteWorker);
}
