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
  req.context = { models };
  next();
});

app.use('/users', routes.users);

app.listen(4000, () =>
  console.log(`Users Service Running on http://localhost:${4000}`),
);
