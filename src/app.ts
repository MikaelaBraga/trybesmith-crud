import * as dotenv from 'dotenv';
import express from 'express';

const app = express();
dotenv.config();

app.use(express.json());

// rotas devem estar aqui
app.use('/users');

export default app;
