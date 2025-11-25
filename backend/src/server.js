// Servidor principal do sistema OnMotor
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { testConnection } = require('./config/database');

const authRoutes = require('./routes/authRoutes');
const clientesRoutes = require('./routes/clientesRoutes');
const veiculosRoutes = require('./routes/veiculosRoutes');
const servicosRoutes = require('./routes/servicosRoutes');
const produtosRoutes = require('./routes/produtosRoutes');
const vendasRoutes = require('./routes/vendasRoutes');
const financeiroRoutes = require('./routes/financeiroRoutes');
const relatoriosRoutes = require('./routes/relatoriosRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const deviceLimiter = require('./middlewares/deviceLimiter');
app.use(deviceLimiter);

app.use('/api/auth', authRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/veiculos', veiculosRoutes);
app.use('/api/servicos', servicosRoutes);
app.use('/api/produtos', produtosRoutes);
app.use('/api/vendas', vendasRoutes);
app.use('/api/financeiro', financeiroRoutes);
app.use('/api/relatorios', relatoriosRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'online',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    database: 'connected'
  });
});

app.get('/', (req, res) => {
  res.json({ 
    message: 'OnMotor API',
    status: 'online',
    version: '1.0.0'
  });
});

app.use((err, req, res, next) => {
  console.error('❌ Erro:', err.stack);
  res.status(err.status || 500).json({
    error: true,
    message: err.message || 'Erro interno do servidor',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

const startServer = async () => {
  try {
    console.log('🔄 Testando conexão com banco de dados...');
    const connected = await testConnection();
    
    if (!connected) {
      console.error('❌ Falha ao conectar ao banco de dados.');
      process.exit(1);
    }

    app.listen(PORT, '0.0.0.0', () => {
      console.log('=================================');
      console.log('🚀 Servidor OnMotor ONLINE!');
      console.log(`📡 Porta: ${PORT}`);
      console.log(`🌍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
      console.log(`✅ API Health: http://localhost:${PORT}/api/health`);
      console.log('=================================');
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar servidor:', error);
    process.exit(1);
  }
};

startServer();

module.exports = app;
