// Rotas de produtos
const express = require('express');
const router = express.Router();

// Listar todos os produtos
router.get('/', (req, res) => {
  res.json({ 
    message: 'Lista de produtos funcionando',
    produtos: [
      { id: 1, nome: 'Óleo de motor 5W30', preco: 45.90, estoque: 20, categoria: 'Lubrificantes' },
      { id: 2, nome: 'Filtro de óleo', preco: 25.50, estoque: 15, categoria: 'Filtros' },
      { id: 3, nome: 'Pastilha de freio dianteira', preco: 120.00, estoque: 8, categoria: 'Freios' }
    ]
  });
});

// Obter produto por ID
router.get('/:id', (req, res) => {
  res.json({ 
    message: 'Detalhes do produto funcionando',
    produto: { 
      id: req.params.id, 
      nome: 'Óleo de motor 5W30',
      descricao: 'Óleo sintético para motores a gasolina e flex',
      preco: 45.90,
      preco_custo: 32.50,
      estoque: 20,
      estoque_minimo: 5,
      categoria: 'Lubrificantes',
      fornecedor_id: 1,
      codigo_barras: '7891234567890',
      localizacao: 'Prateleira A3'
    }
  });
});

// Criar novo produto
router.post('/', (req, res) => {
  res.status(201).json({ 
    message: 'Produto criado com sucesso',
    produto: { 
      id: 4, 
      ...req.body 
    }
  });
});

// Atualizar produto
router.put('/:id', (req, res) => {
  res.json({ 
    message: 'Produto atualizado com sucesso',
    produto: { 
      id: req.params.id, 
      ...req.body 
    }
  });
});

// Atualizar estoque
router.put('/:id/estoque', (req, res) => {
  res.json({ 
    message: 'Estoque atualizado com sucesso',
    produto: { 
      id: req.params.id, 
      estoque: req.body.quantidade,
      data_atualizacao: new Date().toISOString()
    }
  });
});

module.exports = router;
