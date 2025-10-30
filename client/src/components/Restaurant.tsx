import { ChangeEvent, useContext, useEffect } from "react";
import "../styles/Restaurant.css";
import { RestaurantsMapContext } from "../hooks/useRestaurantsMap";
import { IRestaurant } from "../utils";

export default function Restaurant({restaurant, setFocus}: {restaurant: IRestaurant, setFocus: React.Dispatch<React.SetStateAction<string | undefined>>}) {
    const {setRestaurantsMap} = useContext(RestaurantsMapContext);
    const categories = restaurant.categories.map((t, i) => <li key={`type-${i}`}>{t}</li>);
    const cuisines = restaurant.cuisines.map((c, i) => <li key={`cuisine-${i}`}>{c}</li>);

    useEffect(() => {
        const value = localStorage.getItem(`restaurant-${restaurant.id}`);
        if (value !== null) {
            setRestaurantsMap(r => {
                const newRestaurant = {...r[restaurant.id]};
                newRestaurant.enabled = Boolean(value);
                const newMap = structuredClone(r);
                newMap[restaurant.id] = newRestaurant;
                return newMap;
            });
        }
    }, [restaurant.id, setRestaurantsMap]);

    const checkboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        const value = e.currentTarget.checked;
        console.log('storing ', value)
        setRestaurantsMap(r => {
                const newRestaurant = {...r[restaurant.id]};
                newRestaurant.enabled = value;
                const newMap = structuredClone(r);
                newMap[restaurant.id] = newRestaurant;
                return newMap;
            });
        localStorage.setItem(`restaurant-${restaurant.id}`, `${value}`);
    };

    const selectMarker = () => {
        setFocus(restaurant.id);
    }

    return <div className="restaurant" onClick={selectMarker}>
        <input type="checkbox" name="box" onChange={checkboxChange} defaultChecked={restaurant.enabled} />
        <div className="left-side">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <p>{restaurant.notes}</p>
        </div>
        <div className="right-side">
            <ul>{categories}</ul>
            <ul>{cuisines}</ul>
        </div>
    </div>
}