// import AddRestaurantFields from './AddRestaurantFields';
import '../../styles/RestaurantModal.css';
import FindRestaurant from './FindRestaurant';

export default function RestaurantModal({ close }: { close: () => void }) {

    return <div id="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <section className="modal">
            <h2>Add Restaurant</h2>
            <p>Add a new restaurant!</p>
            {/* <AddRestaurantFields /> */}
            <FindRestaurant />
            <button onClick={close}>Close</button>
        </section>
    </div>
}