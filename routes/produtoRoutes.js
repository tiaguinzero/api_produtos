const express = require('express');
const { getProdutos, createProduto, deleteProduto, putProduto } = require('../controllers/produtoController');

const router = express.Router();

router.get('/', getProdutos);
router.post('/', createProduto);
router.put('/:id', putProduto);
router.delete('/:id', deleteProduto);

module.exports = router;