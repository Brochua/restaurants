import express from 'express';
import getCategories from '../controllers/category.controller.js';
const categories = express.Router();

categories.get('/categories', getCategories);

export default categories;
