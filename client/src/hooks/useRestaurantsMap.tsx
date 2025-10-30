import React, { createContext, useState } from "react";
import { IRestaurant } from "../utils";

interface RestaurantsMapType {
    restaurantsMap: {[key: string]: IRestaurant},
    setRestaurantsMap: React.Dispatch<React.SetStateAction<{[key: string]: IRestaurant}>>
}

export const RestaurantsMapContext = createContext<RestaurantsMapType>({} as RestaurantsMapType);

export function RestaurantMapProvider({ children }: { children: React.ReactNode }) {

  const [restaurantsMap, setRestaurantsMap] = useState<{[key: string]: IRestaurant}>({});

  return (
    <RestaurantsMapContext.Provider value={{ restaurantsMap, setRestaurantsMap }}>
      {children}
    </RestaurantsMapContext.Provider>
  );
}

