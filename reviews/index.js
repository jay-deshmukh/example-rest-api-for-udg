import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models from './models';
import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use('/reviews', routes.reviews);

app.listen(4001, () =>
  console.log(`Review service running on http://localhost:${4001}`),
);
