// import AddRestaurantFields from './AddRestaurantFields';
import { useState } from 'react';
import '../../styles/RestaurantModal.css';
import FindRestaurant from './FindRestaurant';
import AddRestaurantFields from './AddRestaurantFields';

export default function RestaurantModal({ close }: { close: () => void }) {
    const [selectedPlace, setSelectedPlace] = useState<google.maps.places.Place | null>(null);
    const [page, setPage] = useState(0);
    const pages = [
        <FindRestaurant place={selectedPlace} setPlace={setSelectedPlace} />,
        <AddRestaurantFields place={selectedPlace} />
    ];

    const nextPage = () => {
        if (page < pages.length - 1) {
            setPage(p => p + 1);
        }
    }

    const prevPage = () => {
        if (page > 0) {
            setPage(p => p - 1);
        }
    }

    return <div id="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <section className="modal">
            <h2>Add Restaurant</h2>
            <p>Add a new restaurant!</p>
            {pages[page]}
            <section className='add-controls'>
                <button disabled={page <= 0} onClick={prevPage}>Back</button>
                <button onClick={close}>Cancel</button>
                <button disabled={page >= pages.length - 1} onClick={nextPage}>Next</button>
            </section>
        </section>
    </div>
}