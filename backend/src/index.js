const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);

/*
Tipos de parâmetro:

Query Params: parâmetros nomeados enviados na rota após ? (filtros, paginação)
Route Params: parâmetros utilizados para identificar recursos
Request Body: corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
Driver:
Query Builder:
*/



app.listen(3333);