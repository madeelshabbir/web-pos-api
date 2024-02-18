import 'express-async-errors';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { errorHanlder } from './middlewares/error-handler';
import { v1Router } from './api/v1/routes';
import { invalidRoutes } from './middlewares/invalid-routes';

const { PORT, CLIENT_HOST } = process.env;

const app = express();

app.use(cors({ origin: CLIENT_HOST }));
app.use(bodyParser.json());
app.use(v1Router);
app.all('*', invalidRoutes);
app.use(errorHanlder);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
