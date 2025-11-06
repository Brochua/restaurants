import { APIProvider, Map, MapControl, ControlPosition } from "@vis.gl/react-google-maps";
import { useState } from "react";
// import MapHandler from "./MapHandler";
import PlaceAutocomplete from "./PlaceAutocomplete";
import AutocompleteResult from "./AutocompleteResult";

export default function FindRestaurant() {
    const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.Place | null>(null);
    // const [markerRef, marker] = useAdvancedMarkerRef();

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
                    <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
                </div>
            </MapControl>
            <AutocompleteResult place={selectedPlace} />
            </Map>
        </APIProvider>
    </section>
}