import { capitalize, IRestaurant } from "../../utils";
import '../../styles/RestaurantInfo.css'
import Star from "../icons/Star";

export default function RestaurantInfo({restaurant}: {restaurant: IRestaurant}) {
    const stars = [];
    let rating = restaurant.rating;
    for (let i = 0; i < 5; i++) {
        stars.push(<Star key={i} percentage={rating < 0 ? 0 : rating} />);
        rating--;
    }
    
    return <div>
        <h3>
            {restaurant.url ? 
                <a href={restaurant.url}>{restaurant.name}</a> :
                restaurant.name
            }
        </h3>
        <p>{restaurant.categories.map(t => capitalize(t))} | {restaurant.cuisines.map(c => capitalize(c))}</p>
        <p>{restaurant.notes}</p>
        <p>{restaurant.phoneNumber}</p>
        <div>
            {stars}
            ({restaurant.rating})
        </div>
        <ul>
            {restaurant.hours?.map(h => <li>{h}</li>)}
        </ul>    
    </div>
}