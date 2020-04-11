import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../logger.txt');

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    res.send(data.toString('utf8'));
  } catch (e) {
    res.send(e.stack);
  }
});

export default router;
