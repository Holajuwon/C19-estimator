import { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import covid from '../routes/on-covid19';
import log from '../routes/logs';

const logger = fs.createWriteStream(path.join(__dirname, '../logger.txt'), {
  flags: 'a'
});

export default (app) => {
  // middlewares
  app.use(cors({ origin: true, credentials: true }));
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(
    morgan(':method \t :url \t :status \t 00:response-time[0]ms', {
      stream: logger
    })
  );
  app.use('/api/v1/on-covid-19', covid);
  app.use('/api/v1/on-covid-19/logs', log);
};
