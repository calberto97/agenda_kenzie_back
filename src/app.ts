import 'express-async-errors';
import { errorHandler } from './errors';
import express, { Application } from 'express';
import cors from 'cors';
import { clientRouter } from './routers/client.routes';
import { contactRouter } from './routers/contact.routes';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/client', clientRouter);
app.use('/contacts', contactRouter);

app.use(errorHandler);

export default app;
