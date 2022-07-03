# Boas vindas ao repositório do projeto Trybesmith!

## Habilidades

O objetivo neste projeto:

- Declarar variáveis e funções com tipagens _Typescript_;

- Construir uma _API Node Express_ utilizando o _Typescript_.

---

## Instalação

1. Clone o repositório

- `git clone git@github.com:MikaelaBraga/trybesmith-crud.git`.

- Entre na pasta do repositório que você acabou de clonar:
  - `cd trybesmith-crud`

2. Instale as dependências [**Caso existam**]:
  - `npm install`

3. Configurando o banco com Docker

- `docker container run --name trybe-smith -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql:5`
- Certifique-se de setar as variáveis de ambiente no arquivo `.env`

> Certifique-se que vocễ tem o Docker instalado na sua máquina

4. Iniciando a API, na raíz do diretório rode

- `npm start`

---

## Endpoints

### POST /users
> Cadastra um usuário
```json
{
  "username": "string",
  "classe": "string",
  "level": 1,
  "password": "string"
}
```
### POST /login
> Efetua login
```json
  {
    "username": "string",
    "password": "string"
  }
```

### POST /products
> Cadastra um produto
```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

### GET /products
> Listagem de produtos
```json
    [
      {
        "id": 1,
        "name": "Poção de cura",
        "amount": "20 gold",
        "orderId": null
      },
      {
        "id": 2,
        "name": "Escudo do Herói",
        "amount": "100 diamond",
        "orderId": 1
      }
    ]
```

### POST /orders
> Cadastro de pedidos
```json
  {
    "products": [1, 2]
  }
```

### GET /orders/:id
> Consulta um pedido
```json
      {
        "id": 1,
        "userId": 2,
        "products": [1, 2]
      }
```
### GET /orders
>Listagem de pedidos
```json
      [
        {
          "id": 1,
          "userId": 2,
          "products": [1, 2]
        },
        {
          "id": 2,
          "userId": 2,
          "products": [3, 1, 4]
        }
      ]
```
---