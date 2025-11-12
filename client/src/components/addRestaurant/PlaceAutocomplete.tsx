import { ControlPosition, MapControl, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useState, useCallback, FormEvent } from "react";
import { useAutocompleteSuggestions } from "../../hooks/useAutocompleteSuggestions";
import { useDebounce } from "../../hooks/useDebounce";
import '../../styles/PlacesAutocomplete.css';

interface Props {
  onPlaceSelect: (place: google.maps.places.Place | null) => void;
}

export default function PlaceAutocomplete({onPlaceSelect}: Props) {
  const map = useMap();
  const places = useMapsLibrary('places');

  const [inputValue, setInputValue] = useState<string>('');
  // Add a delay to not waste API calls
  const debouncedValue = useDebounce(inputValue, 200);
  const {suggestions, resetSession} = useAutocompleteSuggestions(debouncedValue, {
    includedPrimaryTypes: ['restaurant', 'store', 'cafe', 'supermarket', 'bar'],
    locationBias: map?.getBounds()?.toJSON()
  });

  const handleInput = useCallback((event: FormEvent<HTMLInputElement>) => {
    setInputValue((event.target as HTMLInputElement).value);
  }, []);

  const handleSuggestionClick = useCallback(
    async (suggestion: google.maps.places.AutocompleteSuggestion) => {
      if (!places) return;
      if (!suggestion.placePrediction) return;

      const place = suggestion.placePrediction.toPlace();

      await place.fetchFields({
        fields: [
          'displayName',
          'addressComponents',
          'formattedAddress',
          'location',
          'types',
          'nationalPhoneNumber',
          'websiteURI',
          'rating',
          'regularOpeningHours'
        ],
      });

      setInputValue('');

      // calling fetchFields invalidates the session-token, so we now have to call
      // resetSession() so a new one gets created for further search
      resetSession();

      onPlaceSelect(place);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [places, onPlaceSelect]
  );

  return (
    <MapControl position={ControlPosition.TOP_CENTER}>
      <div className="autocomplete-control">
        <div className="autocomplete-container">
          <input
            value={inputValue}
            onInput={event => handleInput(event)}
            placeholder="Search for a place"
          />

          {suggestions.length > 0 && (
            <ul className="custom-list">
              {suggestions.map((suggestion, index) => {
                return (
                  <li
                    key={index}
                    className="custom-list-item"
                    onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion.placePrediction?.text.text}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </MapControl>
  );
};
