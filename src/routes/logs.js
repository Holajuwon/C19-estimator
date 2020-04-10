import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const filePath = path.resolve('./src/config/logger.txt');

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    res.send(data);
  } catch (e) {
    res.send('Error:', e.stack);
  }
});

export default router;
