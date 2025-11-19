import { capitalize, IRestaurant } from "../../utils";
import Star from "../icons/Star";
import '../../styles/RestaurantInfo.css'

export default function RestaurantInfo({restaurant}: {restaurant: IRestaurant}) {
    const stars = [];
    let rating = restaurant.rating;
    for (let i = 0; i < 5; i++) {
        stars.push(<Star key={`star-${i}`} percentage={rating < 0 ? 0 : rating} />);
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
            {restaurant.hours?.map((h, i) => <li key={`hours-${i}`} >{h}</li>)}
        </ul>    
    </div>
}