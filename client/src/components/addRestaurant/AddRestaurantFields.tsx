import { useEffect, useRef, useState } from "react"

export default function AddRestaurantFields({place}: {place: google.maps.places.Place | null}) {
    // State for all form fields
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [notes, setNotes] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [area, setArea] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [website, setWebsite] = useState<string>('');
    const [cuisines, setCuisines] = useState<string[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [location, setLocation] = useState<[number, number]>([0,0]);
    const [mapsRating, setMapsRating] = useState<number>();
    const [hours, setHours] = useState<string>();
    const mapsPlaceId = useRef<string>(undefined);

    useEffect(() => populateFieldsFromPlace(place), [place])

    const populateFieldsFromPlace = (p: google.maps.places.Place | null) => {
        if (!p) return;
        
        console.log(p);
        if (p.displayName) {
            setName(p.displayName);
        }
        if (p.formattedAddress) {
            setAddress(p.formattedAddress);
        }
        if (p.addressComponents) {
            setArea(
                p.addressComponents.find(comp =>
                    comp.types.some(t =>
                        ['sublocality', 'neighborhood', 'administrative_area_level_2'].includes(t)
                    )
                )?.longText ?? ''
            );
        }
        if (p.nationalPhoneNumber) {
            setPhoneNumber(p.nationalPhoneNumber);
        }
        if (p.websiteURI) {
            setWebsite(p.websiteURI);
        }
        if (p.types) {
            setCuisines(p.types);
        }
        if (p.types) {
            setCategories(p.types);
        }
        if (p.location) {
            setLocation([p.location?.lat(), p.location?.lng()]);
        }
        if (p.rating) {
            setMapsRating(p.rating);
        }
        if (p.regularOpeningHours) {
            setHours(p.regularOpeningHours.weekdayDescriptions.join(';'))
        }
        mapsPlaceId.current = p.id;
    }

    const submitRestaurant = async (e: React.MouseEvent) => {
        e.preventDefault();
        const restaurantData = {
            name,
            description,
            notes,
            address,
            area,
            phoneNumber,
            website,
            latitude: location[0],
            longitude: location[1],
            mapsRating: mapsRating,
            mapsPlaceId: mapsPlaceId.current
        }

        try {
            const createResponse = await fetch('/api/restaurants', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    restaurant: restaurantData,
                    cuisines,
                    categories
                })
            })
    
            if (createResponse.ok) {
                alert("Wooo created")
                window.location.reload();
            } else {
                console.error("something went wrong", createResponse)
            }
        } catch (e) {
            console.error(e)
        }
    }

    return <form id='create-restaurant'>
        <fieldset>
            <label htmlFor="name">Name:</label>
            <input required name="name" value={name} onChange={e => setName(e.target.value)} />
        </fieldset>

        <fieldset>
            <label htmlFor="description">Description:</label>
            <input name="description" value={description} onChange={e => setDescription(e.target.value)} />
        </fieldset>

        <fieldset>
            <label htmlFor="notes">Notes:</label>
            <input name="notes" value={notes} onChange={e => setNotes(e.target.value)} />
        </fieldset>

        <fieldset>
            <label htmlFor="address">Address:</label>
            <input name="address" value={address} onChange={e => setAddress(e.target.value)} />
        </fieldset>

        <fieldset>
            <label htmlFor="area">Area:</label>
            <input name="area" value={area} onChange={e => setArea(e.target.value)} />
        </fieldset>

        <fieldset>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input name="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        </fieldset>

        <fieldset>
            <label htmlFor="website">Website:</label>
            <input name="website" value={website} onChange={e => setWebsite(e.target.value)}/>
        </fieldset>

        <fieldset>
            <label htmlFor="cuisines">Cuisines:</label>
            <input name="cuisines" value={cuisines.join(',')} onChange={e => setCuisines(e.target.value.split(','))} />
            {/* <select multiple name="cuisines">
                <option>goon</option>
                <option>goon2</option>
                <option>goon3</option>
                <option>goon4</option>
            </select> */}
        </fieldset>

        <fieldset>
            <label htmlFor="categories">Categories:</label>
            <input name="categories" value={categories.join(',')} onChange={e => setCategories(e.target.value.split(','))} />
            {/* <select multiple name="categories">
                <option>goonie</option>
                <option>goonie2</option>
                <option>goonie3</option>
                <option>goonie4</option>
            </select> */}
        </fieldset>

        <fieldset>
            <label htmlFor="coordinates">Coordinates:</label>
            <input name="coordinates" value={location.join(',')} onChange={e => setLocation(e.target.value.split(',').map(v => Number(v)).slice(0, 2) as [number, number])} />
        </fieldset>

        <fieldset>
            <label htmlFor="mapsRating">Maps Rating:</label>
            <input name="mapsRating" value={mapsRating} onChange={e => setMapsRating(Number(e.target.value))} />
        </fieldset>

        <fieldset>
            <label htmlFor="hours">Hours:</label>
            <input name="hours" value={hours} onChange={e => setHours(e.target.value)} />
        </fieldset>

        <button onClick={submitRestaurant}>Create!</button>
    </form>
}