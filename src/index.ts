import app from './app';

const PORT = 3000;

// iniciando o projeto
app.get('/', (_req, _res) => {});

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
