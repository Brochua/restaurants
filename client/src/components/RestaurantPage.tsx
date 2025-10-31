import { useContext, useEffect, useState } from "react";
import { IRestaurant } from "../utils";
import RestaurantMap from "./map/RestaurantMap";
import { RestaurantsMapContext } from "../hooks/useRestaurantsMap";
import { createPortal } from "react-dom";
import RestaurantModal from "./RestaurantModal";
import RestaurantList from "./list/RestaurantList";
import '../styles/RestaurantList.css';


export default function RestaurantPage() {
    const {restaurantsMap, setRestaurantsMap} = useContext(RestaurantsMapContext);
    const [focus, setFocus] = useState<string | undefined>(undefined)
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

    useEffect(() => {
        const getRestaurants = async () => {
            const resp = await fetch('/api/restaurants');
            if (resp.ok) {
                const json = await resp.json();

                const restaurants: IRestaurant[] = json.restaurants;
                setRestaurantsMap(restaurants.reduce((acc, curr) => {
                    curr.enabled = true;
                    acc[curr.id] = curr;
                    return acc;
                }, {} as {[key: string]: IRestaurant}));
            }
        };
        getRestaurants();
    }, [setRestaurantsMap]);

    return <div id="restaurants-map-page">
        <RestaurantList setFocus={setFocus} />
        <section id="map">
            <RestaurantMap focus={focus} restaurantsMap={restaurantsMap} />
        </section>
        <button id="add-restaurant" onClick={() => setShowCreateModal(true)}>
            +
        </button>
        {showCreateModal && createPortal(
            <RestaurantModal close={() => setShowCreateModal(false)} />,
            document.getElementById('modal')!
        )}
    </div>
}