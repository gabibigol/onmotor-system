// Rotas de veículos
const express = require('express');
const router = express.Router();

// Listar todos os veículos
router.get('/', (req, res) => {
  res.json({ 
    message: 'Lista de veículos funcionando',
    veiculos: [
      { id: 1, placa: 'ABC1234', marca: 'Toyota', modelo: 'Corolla', ano: 2022, cliente_id: 1 },
      { id: 2, placa: 'DEF5678', marca: 'Honda', modelo: 'Civic', ano: 2021, cliente_id: 2 }
    ]
  });
});

// Obter veículo por ID
router.get('/:id', (req, res) => {
  res.json({ 
    message: 'Detalhes do veículo funcionando',
    veiculo: { 
      id: req.params.id, 
      placa: 'ABC1234',
      marca: 'Toyota',
      modelo: 'Corolla',
      ano_fabricacao: 2022,
      ano_modelo: 2023,
      cor: 'Prata',
      chassi: '9BRBLWHEXG0000001',
      renavam: '12345678901',
      cliente_id: 1
    }
  });
});

// Criar novo veículo
router.post('/', (req, res) => {
  res.status(201).json({ 
    message: 'Veículo criado com sucesso',
    veiculo: { 
      id: 3, 
      ...req.body 
    }
  });
});

// Atualizar veículo
router.put('/:id', (req, res) => {
  res.json({ 
    message: 'Veículo atualizado com sucesso',
    veiculo: { 
      id: req.params.id, 
      ...req.body 
    }
  });
});

// Excluir veículo
router.delete('/:id', (req, res) => {
  res.json({ 
    message: 'Veículo excluído com sucesso',
    id: req.params.id
  });
});

module.exports = router;
