import { APIProvider, Map, useAdvancedMarkerRef, AdvancedMarker, MapControl, ControlPosition } from "@vis.gl/react-google-maps";
import { useState } from "react";
import MapHandler from "./MapHandler";
import PlaceAutocomplete from "./PlaceAutocomplete";

export default function FindRestaurant() {
    const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
    const [markerRef, marker] = useAdvancedMarkerRef();

    return <section id="google-maps-container">
        <APIProvider
            apiKey={API_KEY}
            solutionChannel='GMP_devsite_samples_v3_rgmautocomplete'>
            <Map
                mapId={'bf51a910020fa25a'}
                defaultZoom={3}
                defaultCenter={{ lat: 22.54992, lng: 0 }}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >
                <AdvancedMarker ref={markerRef} position={null} />
            </Map>
            <MapControl position={ControlPosition.TOP}>
                <div className="autocomplete-control">
                    <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
                </div>
            </MapControl>
            <MapHandler place={selectedPlace} marker={marker} />
            </APIProvider>
    </section>
}