import * as dotenv from 'dotenv';
import express from 'express';
import routeLogin from './controllers/LoginController';
import routeOrder from './controllers/OrderController';
import routeProduct from './controllers/ProductController';
import routeUser from './controllers/UserController';
import domainError from './middlewares/errors/domainError';
import joiError from './middlewares/errors/joiError';
import serverError from './middlewares/errors/serverError';

const app = express();
dotenv.config();

app.use(express.json());

// rotas devem estar aqui
app.use('/users', routeUser);
app.use('/login', routeLogin);
app.use('/products', routeProduct);
app.use('/orders', routeOrder);

app.use(joiError);
app.use(domainError);
app.use(serverError);

export default app;
