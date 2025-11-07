import { APIProvider, Map, MapControl, ControlPosition } from "@vis.gl/react-google-maps";
import PlaceAutocomplete from "./PlaceAutocomplete";
import AutocompleteResult from "./AutocompleteResult";

export default function FindRestaurant({place, setPlace}: {place: google.maps.places.Place | null, setPlace: React.Dispatch<React.SetStateAction<google.maps.places.Place | null>>}) {
    const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    return <section id="google-maps-container">
        <APIProvider
            apiKey={API_KEY}
            solutionChannel='GMP_devsite_samples_v3_rgmautocomplete'>
            <Map
                mapId={'bf51a910020fa25a'}
                defaultZoom={10}
                defaultCenter={{ lat: 45.5, lng: -73.7 }}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >
            <MapControl position={ControlPosition.TOP}>
                <div className="autocomplete-control">
                    <PlaceAutocomplete onPlaceSelect={setPlace} />
                </div>
            </MapControl>
            <AutocompleteResult place={place} />
            </Map>
        </APIProvider>
    </section>
}