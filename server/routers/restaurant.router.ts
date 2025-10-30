import express from 'express';
import { getRestaurants, getRestaurant, getPageCount, createRestaurant } from '../controllers/restaurant.controller.ts';
const restaurants = express.Router();

restaurants.get('/restaurants', getRestaurants);

restaurants.get('/restaurants/page-count', getPageCount);

restaurants.get('/restaurants/:id', getRestaurant);

restaurants.post('/restaurants', createRestaurant)

export default restaurants;
