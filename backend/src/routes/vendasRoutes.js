// Rotas de vendas
const express = require('express');
const router = express.Router();

// Listar todas as vendas
router.get('/', (req, res) => {
  res.json({ 
    message: 'Lista de vendas funcionando',
    vendas: [
      { 
        id: 1, 
        cliente_id: 1, 
        data_venda: '2025-11-23', 
        valor_total: 345.90, 
        status: 'Finalizada',
        forma_pagamento: 'Cartão de Crédito'
      },
      { 
        id: 2, 
        cliente_id: 2, 
        data_venda: '2025-11-24', 
        valor_total: 120.00, 
        status: 'Finalizada',
        forma_pagamento: 'Dinheiro'
      }
    ]
  });
});

// Obter venda por ID
router.get('/:id', (req, res) => {
  res.json({ 
    message: 'Detalhes da venda funcionando',
    venda: { 
      id: req.params.id, 
      cliente_id: 1,
      cliente_nome: 'João Silva',
      data_venda: '2025-11-23',
      valor_total: 345.90,
      desconto: 0,
      status: 'Finalizada',
      forma_pagamento: 'Cartão de Crédito',
      parcelas: 3,
      vendedor_id: 1,
      vendedor_nome: 'Carlos Vendas',
      itens: [
        { produto_id: 1, nome: 'Óleo de motor 5W30', quantidade: 5, valor_unitario: 45.90, valor_total: 229.50 },
        { produto_id: 2, nome: 'Filtro de óleo', quantidade: 3, valor_unitario: 25.50, valor_total: 76.50 },
        { produto_id: 3, nome: 'Pastilha de freio dianteira', quantidade: 1, valor_unitario: 120.00, valor_total: 120.00 }
      ]
    }
  });
});

// Criar nova venda
router.post('/', (req, res) => {
  res.status(201).json({ 
    message: 'Venda criada com sucesso',
    venda: { 
      id: 3, 
      ...req.body,
      data_venda: new Date().toISOString().split('T')[0],
      status: 'Finalizada'
    }
  });
});

// Cancelar venda
router.put('/:id/cancelar', (req, res) => {
  res.json({ 
    message: 'Venda cancelada com sucesso',
    venda: { 
      id: req.params.id, 
      status: 'Cancelada',
      data_cancelamento: new Date().toISOString(),
      motivo_cancelamento: req.body.motivo || 'Não informado'
    }
  });
});

module.exports = router;
