import { json, urlencoded } from 'express';
import cors from 'cors';
import covid from '../routes/on-covid19';

export default (app) => {
  // middlewares
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use('/api/v1/on-covid-19', covid);
};
