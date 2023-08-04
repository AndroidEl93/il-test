import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapContent from './MapContent';

function Map() {
	return (
		<MapContainer className="map_container" scrollWheelZoom={false} zoom={10} center={[59.941455, 30.287364]}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<MapContent />
		</MapContainer>
	);
}

export default Map;
