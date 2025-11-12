import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { IRestaurant } from '../../utils';
import RestaurantInfo from './RestaurantInfo';
import MapPanHandler from './MapPanHandler';
import createSvgIcon from '../icons/MarkerIcon';
import { useMemo } from 'react';
import 'leaflet/dist/leaflet.css';
import '../../styles/RestaurantMap.css';


export default function RestaurantMap({restaurantsMap, focus}: {restaurantsMap: {[key: string]: IRestaurant}, focus?: string}) {
    const attribution = 
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    const restaurants = useMemo(() => {
        return Object.values(restaurantsMap).filter(r => !!r.enabled && r.latitude && r.longitude)
    }, [restaurantsMap]);

    return <>
        <MapContainer
            center={[45.5, -73.6]}
            zoom={12}
            zoomControl={true}
            preferCanvas={true}
            minZoom={10}
            maxZoom={16}
            >
            <MapPanHandler focus={focus ? getCoordsFromRestaurant(restaurantsMap[focus]) : undefined} />
            <TileLayer
                attribution={attribution}
                url={tileUrl}
                />
            {restaurants.map(r => {
                return <Marker label={`restaurant-${r.id}`} position={[r.latitude, r.longitude]} icon={createSvgIcon(r.id === focus ? "red" : undefined)} >
                    <Popup>
                        <RestaurantInfo restaurant={r} />
                    </Popup>
                </Marker>
            })}
        </MapContainer>
    </>;
}

function getCoordsFromRestaurant(restaurant: IRestaurant): [number, number] {
    return [restaurant.latitude, restaurant.longitude]
}