// Rotas de clientes
const express = require('express');
const router = express.Router();

// Listar todos os clientes
router.get('/', (req, res) => {
  res.json({ 
    message: 'Lista de clientes funcionando',
    clientes: [
      { id: 1, nome: 'João Silva', telefone: '(11) 99999-9999', email: 'joao@example.com' },
      { id: 2, nome: 'Maria Oliveira', telefone: '(11) 88888-8888', email: 'maria@example.com' }
    ]
  });
});

// Obter cliente por ID
router.get('/:id', (req, res) => {
  res.json({ 
    message: 'Detalhes do cliente funcionando',
    cliente: { 
      id: req.params.id, 
      nome: 'Cliente Exemplo', 
      telefone: '(11) 99999-9999', 
      email: 'cliente@example.com',
      endereco: 'Rua Exemplo, 123',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567'
    }
  });
});

// Criar novo cliente
router.post('/', (req, res) => {
  res.status(201).json({ 
    message: 'Cliente criado com sucesso',
    cliente: { 
      id: 3, 
      ...req.body 
    }
  });
});

// Atualizar cliente
router.put('/:id', (req, res) => {
  res.json({ 
    message: 'Cliente atualizado com sucesso',
    cliente: { 
      id: req.params.id, 
      ...req.body 
    }
  });
});

// Excluir cliente
router.delete('/:id', (req, res) => {
  res.json({ 
    message: 'Cliente excluído com sucesso',
    id: req.params.id
  });
});

module.exports = router;
