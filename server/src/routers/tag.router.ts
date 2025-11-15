import express from 'express';
import getTags from '../controllers/tag.controller.js';
const tags = express.Router();

tags.get('/tags', getTags);

export default tags;
