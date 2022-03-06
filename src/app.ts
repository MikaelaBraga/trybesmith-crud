import * as dotenv from 'dotenv';
import express from 'express';
import routeUser from './controllers/UserController';

const app = express();
dotenv.config();

app.use(express.json());

// rotas devem estar aqui
app.use('/users', routeUser);

export default app;
