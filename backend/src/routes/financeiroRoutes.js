// Rotas de financeiro
const express = require('express');
const router = express.Router();

// Listar todos os lançamentos financeiros
router.get('/lancamentos', (req, res) => {
  res.json({ 
    message: 'Lista de lançamentos financeiros funcionando',
    lancamentos: [
      { 
        id: 1, 
        tipo: 'receita', 
        descricao: 'Pagamento OS #1234', 
        valor: 450.00, 
        data: '2025-11-20',
        status: 'confirmado',
        conta_id: 1
      },
      { 
        id: 2, 
        tipo: 'despesa', 
        descricao: 'Pagamento fornecedor', 
        valor: 1200.00, 
        data: '2025-11-22',
        status: 'confirmado',
        conta_id: 1
      }
    ]
  });
});

// Obter resumo financeiro
router.get('/resumo', (req, res) => {
  res.json({ 
    message: 'Resumo financeiro funcionando',
    resumo: {
      saldo_atual: 15450.75,
      receitas_mes: 8500.00,
      despesas_mes: 5200.00,
      lucro_mes: 3300.00,
      contas_receber: 2800.00,
      contas_pagar: 1500.00
    }
  });
});

// Listar contas bancárias
router.get('/contas', (req, res) => {
  res.json({ 
    message: 'Lista de contas bancárias funcionando',
    contas: [
      { id: 1, descricao: 'Conta Principal', banco: 'Banco do Brasil', agencia: '1234', conta: '56789-0', saldo: 12500.50 },
      { id: 2, descricao: 'Conta Reserva', banco: 'Itaú', agencia: '5678', conta: '12345-6', saldo: 2950.25 }
    ]
  });
});

// Criar novo lançamento
router.post('/lancamentos', (req, res) => {
  res.status(201).json({ 
    message: 'Lançamento criado com sucesso',
    lancamento: { 
      id: 3, 
      ...req.body,
      data_criacao: new Date().toISOString()
    }
  });
});

// Atualizar status de lançamento
router.put('/lancamentos/:id/status', (req, res) => {
  res.json({ 
    message: 'Status do lançamento atualizado com sucesso',
    lancamento: { 
      id: req.params.id, 
      status: req.body.status,
      data_atualizacao: new Date().toISOString()
    }
  });
});

module.exports = router;
