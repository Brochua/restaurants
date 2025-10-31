import { useContext, useMemo, useState } from "react";
import { RestaurantsMapContext } from "../../hooks/useRestaurantsMap";
import Restaurant from "./Restaurant";
import TypeaheadDropdown, { TypeaheadOptions } from "./Typeahead";
import { IRestaurant } from "../../utils";

export default function RestaurantList({setFocus}: {setFocus: React.Dispatch<React.SetStateAction<string | undefined>>}) {
    const {restaurantsMap} = useContext(RestaurantsMapContext);
    const [searchQuery, setSearchQuery] = useState("");
    const [options, setOptions] = useState<TypeaheadOptions>({
        goon: false,
        meow: false,
        hi: true
    });

    const filteredRestaurants = useMemo(() => {
        return (Object.values(restaurantsMap) as IRestaurant[]).filter(r => r.name.toLowerCase().includes(searchQuery));
    }, [restaurantsMap, searchQuery]);

    return <aside id="restaurant-list">
        <div id="search-area">
            <div id="search-bar-wrapper">
                <input onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} placeholder="Search..." name="search" />
            </div>
            <div id="tag-dropdowns">
                <TypeaheadDropdown label="Cuisines" options={options} setOptions={setOptions} />
                <TypeaheadDropdown label="Categories" options={options} setOptions={setOptions} />
            </div>
        </div>
        {filteredRestaurants.map(restaurant => <Restaurant restaurant={restaurant} key={`restaurant-${restaurant.id}`} setFocus={setFocus}/>)}
    </aside>
}