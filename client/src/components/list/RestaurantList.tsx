import { useContext, useEffect, useMemo, useState } from "react";
import { RestaurantsMapContext } from "../../hooks/useRestaurantsMap";
import Restaurant from "./Restaurant";
import TypeaheadDropdown, { TypeaheadOptions } from "../common/Typeahead";
import { IRestaurant } from "../../utils";
import { TagsContext } from "../../hooks/useTags";
import { CategoriesContext } from "../../hooks/useCategories";

export default function RestaurantList({setFocus}: {setFocus: React.Dispatch<React.SetStateAction<string | undefined>>}) {
    const {restaurantsMap} = useContext(RestaurantsMapContext);
    const [searchQuery, setSearchQuery] = useState("");
    const [tagOptions, setTagOptions] = useState<TypeaheadOptions>({});
    const [categoryOptions, setCategoryOptions] = useState<TypeaheadOptions>({});
    const {tags} = useContext(TagsContext);
    const {categories} = useContext(CategoriesContext);
    
    useEffect(() => {
        setTagOptions(prev => {
            const oldTagOptions = structuredClone(prev);
            tags.forEach(t => {
                if (!(t in oldTagOptions)) {
                    oldTagOptions[t] = true;
                }
            });
            return oldTagOptions
        });
    }, [tags])

    useEffect(() => {
        setCategoryOptions(prev => {
            const oldCategoryOptions = structuredClone(prev);
            categories.forEach(c => {
                if (!(c in oldCategoryOptions)) {
                    oldCategoryOptions[c] = true;
                }
            });
            return oldCategoryOptions
        });
    }, [categories])

    const filteredRestaurants = useMemo(() => {
        return (Object.values(restaurantsMap) as IRestaurant[]).filter(r => r.name.toLowerCase().includes(searchQuery));
    }, [restaurantsMap, searchQuery]);

    return <aside id="restaurant-list">
        <div id="search-area">
            <div id="search-bar-wrapper">
                <input onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} placeholder="Search..." name="search" />
            </div>
            <div id="tag-dropdowns">
                <TypeaheadDropdown label="Tags" options={tagOptions} setOptions={setTagOptions} />
                <TypeaheadDropdown label="Categories" options={categoryOptions} setOptions={setCategoryOptions} />
            </div>
        </div>
        {filteredRestaurants.map(restaurant => <Restaurant restaurant={restaurant} label={`restaurant-${restaurant.id}`} setFocus={setFocus}/>)}
    </aside>
}