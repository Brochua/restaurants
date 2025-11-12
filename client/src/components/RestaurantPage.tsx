import { useContext, useState } from "react";
import RestaurantMap from "./map/RestaurantMap";
import { RestaurantsMapContext } from "../hooks/useRestaurantsMap";
import { createPortal } from "react-dom";
import RestaurantModal from "./addRestaurant/RestaurantModal";
import RestaurantList from "./list/RestaurantList";
import '../styles/RestaurantList.css';


export default function RestaurantPage() {
    const {restaurantsMap} = useContext(RestaurantsMapContext);
    const [focus, setFocus] = useState<string | undefined>(undefined)
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

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