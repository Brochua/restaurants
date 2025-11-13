import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import compression from 'compression';
import { fileURLToPath } from 'url';
import restaurants from './routers/restaurant.router.js';
import tags from './routers/tag.router.js';
import categories from './routers/category.router.js';

dotenv.config();
const app = express();

app.use(compression());
app.use(express.json());
app.set('trust proxy', 1);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware to verify if the request accepts html
function html(req: { accepts: (arg0: string) => any; }, _: any, next: (arg0?: string) => any) {
  if (req.accepts('html')) {
    return next();
  }
  return next('route');
}

app.use(express.static(path.join(__dirname, '../../client/dist')));


app.get('/api/alive', (req, res) => {
  return res.json({ alive: true });
});

app.use('/api', restaurants);
app.use('/api', tags);
app.use('/api', categories);

// app.get('/api/health', (req, res) => {
//   res.set('Cache-Control', 'max-age=300');
//   const healthData = {};

//   healthData.alive = true;
//   healthData.db = mongoose.STATES[mongoose.connection.readyState];

//   return res.json(healthData);
// });

// Serve index.html for all other routes
app.get('/*all', html, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  return;
});

// not found middleware
app.use((_, res) => {
  res.status(404).json({message: 'not found'});
  return;
});


app.use((err: { message: any; status: any; }, _: any, res: { status: (arg0: any) => void; json: (arg0: { message: any; }) => void; }, _next: any) => {
  console.error(err);
  const error = app.get('env') !== 'production' ? err.message : {};
  res.status(err.status || 500);
  res.json({ message: error });
  return;
});

export default app;