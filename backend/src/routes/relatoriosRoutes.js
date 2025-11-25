// Rotas de relatórios
const express = require('express');
const router = express.Router();

// Relatório de vendas
router.get('/vendas', (req, res) => {
  res.json({ 
    message: 'Relatório de vendas funcionando',
    periodo: req.query.periodo || 'mensal',
    dados: {
      total_vendas: 45800.50,
      quantidade_vendas: 87,
      ticket_medio: 526.44,
      produtos_mais_vendidos: [
        { id: 1, nome: 'Óleo de motor 5W30', quantidade: 120, valor_total: 5508.00 },
        { id: 3, nome: 'Pastilha de freio dianteira', quantidade: 45, valor_total: 5400.00 },
        { id: 5, nome: 'Bateria 60Ah', quantidade: 18, valor_total: 5220.00 }
      ],
      vendas_por_dia: [
        { data: '2025-11-01', valor: 1500.00 },
        { data: '2025-11-02', valor: 2300.00 },
        { data: '2025-11-03', valor: 1800.00 }
      ]
    }
  });
});

// Relatório de serviços
router.get('/servicos', (req, res) => {
  res.json({ 
    message: 'Relatório de serviços funcionando',
    periodo: req.query.periodo || 'mensal',
    dados: {
      total_servicos: 38500.00,
      quantidade_ordens: 65,
      ticket_medio: 592.31,
      servicos_mais_realizados: [
        { id: 2, descricao: 'Revisão completa', quantidade: 28, valor_total: 12600.00 },
        { id: 1, descricao: 'Troca de óleo', quantidade: 42, valor_total: 5040.00 },
        { id: 3, descricao: 'Alinhamento e balanceamento', quantidade: 25, valor_total: 4500.00 }
      ],
      servicos_por_dia: [
        { data: '2025-11-01', valor: 1200.00 },
        { data: '2025-11-02', valor: 1800.00 },
        { data: '2025-11-03', valor: 1500.00 }
      ]
    }
  });
});

// Relatório de clientes
router.get('/clientes', (req, res) => {
  res.json({ 
    message: 'Relatório de clientes funcionando',
    dados: {
      total_clientes: 245,
      novos_clientes_mes: 18,
      clientes_recorrentes: 187,
      clientes_inativos: 40,
      clientes_por_regiao: [
        { regiao: 'Centro', quantidade: 85 },
        { regiao: 'Zona Sul', quantidade: 65 },
        { regiao: 'Zona Norte', quantidade: 55 },
        { regiao: 'Zona Leste', quantidade: 40 }
      ],
      maiores_clientes: [
        { id: 15, nome: 'Empresa XYZ Ltda', total_gasto: 12500.00 },
        { id: 8, nome: 'João Silva', total_gasto: 8750.00 },
        { id: 23, nome: 'Maria Oliveira', total_gasto: 6300.00 }
      ]
    }
  });
});

// Relatório financeiro
router.get('/financeiro', (req, res) => {
  res.json({ 
    message: 'Relatório financeiro funcionando',
    periodo: req.query.periodo || 'mensal',
    dados: {
      receitas: 84300.50,
      despesas: 52800.25,
      lucro: 31500.25,
      margem_lucro: 37.4,
      receitas_por_categoria: [
        { categoria: 'Serviços', valor: 38500.00 },
        { categoria: 'Vendas de peças', valor: 45800.50 }
      ],
      despesas_por_categoria: [
        { categoria: 'Compra de estoque', valor: 28500.00 },
        { categoria: 'Salários', valor: 15000.00 },
        { categoria: 'Aluguel', valor: 5000.00 },
        { categoria: 'Utilidades', valor: 2800.25 },
        { categoria: 'Outros', valor: 1500.00 }
      ]
    }
  });
});

module.exports = router;
