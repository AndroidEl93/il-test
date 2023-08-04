import { LatLngBoundsExpression, LatLngExpression, Icon } from 'leaflet';
import { Marker, Polyline, useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';
/* fixing marker icon problem */
Icon.Default.prototype.options = {
	...Icon.Default.prototype.options,
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
};

const getMapBounds = (points: number[][], route: number[][]): LatLngBoundsExpression | undefined => {
	const source = route.length === 0 ? (points.length === 0 ? null : points) : route;
	if (source) {
		const bounds = [[...source[0]], [...source[0]]];
		source.forEach((point) => {
			if (point[0] < bounds[0][0]) bounds[0][0] = point[0];
			if (point[1] < bounds[0][1]) bounds[0][1] = point[1];
			if (point[0] > bounds[1][0]) bounds[1][0] = point[0];
			if (point[1] > bounds[1][1]) bounds[1][1] = point[1];
		});
		return bounds as LatLngBoundsExpression;
	}
};
function MapContent() {
	const { route, points } = useSelector((state: RootState) => state.data.mapData);
	const map = useMap();
	useEffect(() => {
		const bound = getMapBounds(points, route);
		if (bound) map.fitBounds(bound);
	}, [map, route, points]);

	return (
		<>
			<Polyline pathOptions={{ color: 'blue' }} positions={route as LatLngExpression[]} />
			{points.map((point, idx) => (
				<Marker key={idx} position={point as LatLngExpression} icon={Icon.Default.prototype} />
			))}
		</>
	);
}

export default MapContent;
