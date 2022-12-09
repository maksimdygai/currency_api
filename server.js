import express from 'express';
import cors from 'cors';

import { router } from './api/rates.route.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/currencyrates', router);
app.use("*", (_, res) => res.status(404).json({error: "not found"}));

export { app };