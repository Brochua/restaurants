import express from 'express';
import getCategories from '../controllers/category.controller';
const categories = express.Router();

categories.get('/categories', getCategories);

export default categories;
