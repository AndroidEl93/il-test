import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import createSagaMiddleware from 'redux-saga';
import { getRouteWatcher } from '../saga/routeSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: { data: dataReducer },
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(getRouteWatcher);
export type RootState = ReturnType<typeof store.getState>;
export default store;
