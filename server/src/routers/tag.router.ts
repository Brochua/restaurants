import express from 'express';
import getTags from '../controllers/tag.controller';
const tags = express.Router();

tags.get('/tags', getTags);

export default tags;
