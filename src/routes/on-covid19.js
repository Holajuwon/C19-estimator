import express from 'express';
import covid19ImpactEstimator from '../estimator';
import builder from '../utils/xml';

const router = express.Router();

router.post('(/|/json)', (req, res) => {
  const result = covid19ImpactEstimator(req.body);
  res.json(result);
});

router.post('/xml', (req, res) => {
  const result = covid19ImpactEstimator(req.body);
  res
    .set('content-Type', 'text/xml')
    .type('application/xml')
    .send(builder.buildObject(result));
});

export default router;
