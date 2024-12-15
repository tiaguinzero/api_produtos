# API de Gerenciamento de Produtos

## Descrição
Esta é uma API desenvolvida em **Node.js** conectada ao **MongoDB Atlas**. Ela permite gerenciar produtos de uma loja, oferecendo funcionalidades como **GET**, **POST**, **PUT** e **DELETE** para realizar operações sobre os produtos.

## Funcionalidades
| Método HTTP | Endpoint                          | Descrição                                         |
|---------------|-----------------------------------|---------------------------------------------------------|
| **GET**       | `/api/produtos/`                 | Retorna todos os produtos cadastrados.                  |
| **POST**      | `/api/produtos/`                 | Adiciona um novo produto.                               |
| **PUT**       | `/api/produtos/:id`              | Atualiza um produto existente com base no ID fornecido. |
| **DELETE**    | `/api/produtos/:id`              | Remove um produto do banco de dados com base no ID.     |

## Tecnologias Utilizadas
- **Node.js**
- **Express**
- **MongoDB Atlas**
- **Mongoose**

## Instalação e Configuração

### 1. Clone o Repositório
```bash
git clone https://github.com/tiaguinzero/api_produtos.git
cd api_produtos
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Configuração do Banco de Dados
Procure para o arquivo `.env` na raiz do projeto e configure a conexão com o MongoDB Atlas:
```env
MONGO_URI=<SUA_STRING_DE_CONEXAO_DO_MONGODB_ATLAS>
PORT=5000
```

### 4. Inicie o Servidor
```bash
npm start
```
Ou, para desenvolvimento com hot-reload (usando nodemon):
```bash
npm run dev
```

O servidor estará rodando em: [http://localhost:5000](http://localhost:5000).

## Endpoints

### 1. **Listar Produtos**
- **Rota**: `GET /api/produtos/`
- **Descrição**: Retorna todos os produtos cadastrados.
- **Exemplo de Resposta**:
```json
[
  {
    "id": "64cfcbd7f6d4a2bcd1234567",
    "nome": "Camiseta",
    "descricao": "Camiseta de algodão",
    "preco": 29.99,
    "tamanho": "M",
    "imagemURL": "https://exemplo.com/camiseta.jpg"
  }
]
```

### 2. **Adicionar Produto**
- **Rota**: `POST /api/produtos/`
- **Descrição**: Adiciona um novo produto.
- **Body**:
```json
{
  "nome": "Camiseta",
  "descricao": "Camiseta de algodão",
  "preco": 29.99,
  "tamanho": "M",
  "imagemURL": "https://exemplo.com/camiseta.jpg"
}
```
- **Exemplo de Resposta**:
```json
{
  "id": "64cfcbd7f6d4a2bcd1234567",
  "nome": "Camiseta",
  "descricao": "Camiseta de algodão",
  "preco": 29.99,
  "tamanho": "M",
  "imagemURL": "https://exemplo.com/camiseta.jpg"
}
```

### 3. **Atualizar Produto**
- **Rota**: `PUT /api/produtos/:id`
- **Descrição**: Atualiza um produto existente com base no ID fornecido.
- **Body** (dados que deseja atualizar):
```json
{
  "nome": "Camiseta Atualizada",
  "descricao": "Camiseta de algodão premium",
  "preco": 39.99
}
```
- **Exemplo de Resposta**:
```json
{
  "id": "64cfcbd7f6d4a2bcd1234567",
  "nome": "Camiseta Atualizada",
  "descricao": "Camiseta de algodão premium",
  "preco": 39.99,
  "tamanho": "M",
  "imagemURL": "https://exemplo.com/camiseta.jpg"
}
```

### 4. **Deletar Produto**
- **Rota**: `DELETE /api/produtos/:id`
- **Descrição**: Remove um produto do banco de dados com base no ID fornecido.
- **Exemplo de Resposta**:
```json
{
  "message": "Produto excluído com sucesso",
  "produto": {
    "id": "64cfcbd7f6d4a2bcd1234567",
    "nome": "Camiseta",
    "descricao": "Camiseta de algodão",
    "preco": 29.99,
    "tamanho": "M",
    "imagemURL": "https://exemplo.com/camiseta.jpg"
  }
}
```

## Estrutura do Projeto
```
minha-api/
├── models/
│   └── produto.js       # Modelo do produto
├── controllers/
│   └── produtoController.js # Controladores das rotas
├── routes/
│   └── produtoRoutes.js  # Definição das rotas
├── .env                  # Configurações do banco de dados
├── index.js              # Arquivo principal do servidor
├── package.json          # Dependências e scripts
```

## Contribuição
1. Faça um fork do repositório.
2. Crie uma branch para sua feature/bugfix:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça o commit das suas alterações:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie suas alterações para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um pull request.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

