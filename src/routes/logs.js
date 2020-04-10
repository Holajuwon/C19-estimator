import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const filePath = path.resolve('./src/config/logger.txt');
  try {
    let data = fs.readFileSync(filePath, 'utf8');
    data = data.split('\n');
    return res.json(data);
  } catch (e) {
    return res.send('Error:', e.stack);
  }
});

export default router;
