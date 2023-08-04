import axios, { AxiosRequestConfig } from 'axios';

export interface ResponseOsrmAPI {
	success: boolean;
	errorMessage?: string;
	data?: number[][];
}

const reversePoint = (point: number[]): number[] => [...point].reverse();

const getRouteAxiosConfig = (points: number[][]): AxiosRequestConfig => ({
	method: 'get',
	url: `http://router.project-osrm.org/route/v1/driving/${points
		.map((point) => reversePoint(point).join())
		.join(';')}?geometries=geojson`,
});

const getError = (errorMessage: string): ResponseOsrmAPI => ({ success: false, errorMessage });

export const getRouteFromOSRM = (points: number[][]): Promise<ResponseOsrmAPI> =>
	axios(getRouteAxiosConfig(points)).then(
		(res: any) => {
			if (res.data?.code === 'Ok' && res.data?.routes?.length > 0) {
				const route = res.data.routes[0].geometry?.coordinates;
				if (Array.isArray(route)) {
					return { success: true, data: route.map((point) => reversePoint(point)) };
				} else {
					return getError('Server error');
				}
			} else {
				return getError('Server error');
			}
		},
		(res: any) => getError(res.response?.data?.message || res.message || 'Error')
	);
