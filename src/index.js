import express from 'express';

const app = express();

require('./utils/routes').default(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
