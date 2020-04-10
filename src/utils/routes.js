import { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import covid from '../routes/on-covid19';
import log from '../routes/logs';

const logger = fs.createWriteStream(path.join(__dirname, 'logger.txt'), {
  flags: 'a'
});

export default (app) => {
  // middlewares
  app.use(cors());
  app.use(json());
  app.use(morgan(':method\t\t:url\t\t:status\t\t:response-time\tms', { stream: logger }));
  app.use(urlencoded({ extended: true }));
  app.use('/api/v1/on-covid-19', covid);
  app.use('/api/v1/on-covid-19/logs', log);
};
