const Produto = require('../models/produto');

// Retorna todos os produtos
exports.getProdutos = async (req, res) => {
  try {
    let produtos = await Produto.find();

    produtos = produtos.map(produto => ({
      id: produto._id,
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco,
      tamanho: produto.tamanho,
      imagemURL: produto.imagemURL

    })) 
    res.status(200).json(produtos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro ao buscar produtos', error });
  }
};

// Adiciona um novo produto
exports.createProduto = async (req, res) => {
  try {
    const novoProduto = new Produto(req.body);
    const produtoSalvo = await novoProduto.save();
    res.status(201).json(produtoSalvo);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao cadastrar produto', error });
  }
};

//Atualizar um produto
exports.putProduto = async (req, res) => {
    const { id } = req.params;
    const dadosNovos = req.body;

    try{
        const produtoAtualizado = await Produto.findByIdAndUpdate( id, dadosNovos, {
            new: true,
            runValidators: true 
        });
    
    if (!produtoAtualizado) { //se o produto for false, não foi achado o produto.
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
  
      res.status(200).json({ message: 'Produto atualizado com sucesso', produto: produtoAtualizado });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar o produto', error });
    }
};

// Deleta um produto
exports.deleteProduto = async (req, res) => {
  const { id } = req.params; // Obtém o ID do produto da URL

  try {
    // Remove o produto do banco de dados
    const produtoDeletado = await Produto.findByIdAndDelete(id);

    if (!produtoDeletado) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json({ message: 'Produto excluído com sucesso', produto: produtoDeletado });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir o produto', error });
  }
};