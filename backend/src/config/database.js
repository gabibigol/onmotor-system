// Configuração do banco de dados para Render
const { Sequelize } = require('sequelize');
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL;

let sequelize;

if (DATABASE_URL) {
  // Produção (Render) - usar URL completa
  sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
} else {
  // Desenvolvimento local
  const DB_NAME = process.env.DB_NAME || 'onmotor_db';
  const DB_USER = process.env.DB_USER || 'postgres';
  const DB_PASSWORD = process.env.DB_PASSWORD || 'postgres';
  const DB_HOST = process.env.DB_HOST || 'localhost';
  const DB_PORT = process.env.DB_PORT || 5432;

  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    logging: console.log,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
}

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');
    return true;
  } catch (error) {
    console.error('❌ Não foi possível conectar ao banco de dados:', error);
    return false;
  }
};

module.exports = {
  sequelize,
  testConnection
};
