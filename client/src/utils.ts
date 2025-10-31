interface IRestaurant {
    id: string;
    name: string;
    description: string;
    notes: string;
    categories: string[];
    cuisines: string[];
    latitude: number;
    longitude: number;
    area?: string;
    address: string;
    phoneNumber: string;
    rating: number;
    url: string;
    hours?: string[];
    website?: string;
    price?: number;
    enabled?: boolean;
}

function capitalize(s: string) {
    return s[0].toUpperCase() + s.slice(1);
}

export {capitalize}
export type {IRestaurant};