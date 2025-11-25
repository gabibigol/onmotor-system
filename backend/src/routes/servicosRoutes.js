// Rotas de serviços
const express = require('express');
const router = express.Router();

// Listar todos os serviços
router.get('/', (req, res) => {
  res.json({ 
    message: 'Lista de serviços funcionando',
    servicos: [
      { id: 1, descricao: 'Troca de óleo', valor: 120.00, tempo_estimado: '1h' },
      { id: 2, descricao: 'Revisão completa', valor: 450.00, tempo_estimado: '3h' },
      { id: 3, descricao: 'Alinhamento e balanceamento', valor: 180.00, tempo_estimado: '1h30' }
    ]
  });
});

// Obter serviço por ID
router.get('/:id', (req, res) => {
  res.json({ 
    message: 'Detalhes do serviço funcionando',
    servico: { 
      id: req.params.id, 
      descricao: 'Troca de óleo',
      valor: 120.00,
      tempo_estimado: '1h',
      materiais_inclusos: 'Óleo, filtro de óleo',
      observacoes: 'Serviço inclui verificação de níveis'
    }
  });
});

// Listar ordens de serviço
router.get('/ordens', (req, res) => {
  res.json({ 
    message: 'Lista de ordens de serviço funcionando',
    ordens: [
      { 
        id: 1, 
        cliente_id: 1, 
        veiculo_id: 1, 
        data_entrada: '2025-11-20', 
        status: 'Em andamento',
        itens: [
          { servico_id: 1, valor: 120.00 },
          { servico_id: 3, valor: 180.00 }
        ]
      },
      { 
        id: 2, 
        cliente_id: 2, 
        veiculo_id: 2, 
        data_entrada: '2025-11-22', 
        status: 'Aguardando aprovação',
        itens: [
          { servico_id: 2, valor: 450.00 }
        ]
      }
    ]
  });
});

// Criar nova ordem de serviço
router.post('/ordens', (req, res) => {
  res.status(201).json({ 
    message: 'Ordem de serviço criada com sucesso',
    ordem: { 
      id: 3, 
      ...req.body,
      data_entrada: new Date().toISOString().split('T')[0],
      status: 'Aberta'
    }
  });
});

// Atualizar status de ordem de serviço
router.put('/ordens/:id/status', (req, res) => {
  res.json({ 
    message: 'Status da ordem de serviço atualizado com sucesso',
    ordem: { 
      id: req.params.id, 
      status: req.body.status,
      data_atualizacao: new Date().toISOString()
    }
  });
});

module.exports = router;
