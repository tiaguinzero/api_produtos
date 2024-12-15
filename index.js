require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.set('strictQuery', true);

// Conexão com o MongoDB Atlas
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { dbName: process.env.DB_NAME, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch(err => console.log('Erro ao conectar ao MongoDB Atlas', err));

// Rotas
app.use('/api/produtos', produtoRoutes);

// Inicializa o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
