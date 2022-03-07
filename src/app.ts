import * as dotenv from 'dotenv';
import express from 'express';
import routeLogin from './controllers/LoginController';
import routeUser from './controllers/UserController';
import domainError from './middlewares/errors/domainError';
import joiError from './middlewares/errors/joiError';

const app = express();
dotenv.config();

app.use(express.json());

// rotas devem estar aqui
app.use('/users', routeUser);
app.use('/login', routeLogin);

app.use(joiError);
app.use(domainError);

export default app;
