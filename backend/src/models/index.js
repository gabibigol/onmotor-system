// Definição dos modelos do sistema
const { sequelize } = require('../config/database');
const { DataTypes } = require('sequelize');

// Modelo de Perfil
const Perfil = sequelize.define('Perfil', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT
  },
  permissoes: {
    type: DataTypes.JSONB
  }
}, {
  tableName: 'perfis',
  timestamps: false
});

// Modelo de Usuário
const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  perfil_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  ultimo_acesso: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});

// Modelo de Dispositivo Autorizado
const DispositivoAutorizado = sequelize.define('DispositivoAutorizado', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  device_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nome_dispositivo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_agent: {
    type: DataTypes.TEXT
  },
  data_autorizacao: {
    type: DataTypes.DATE,
    allowNull: false
  },
  ultimo_acesso: {
    type: DataTypes.DATE,
    allowNull: false
  },
  data_revogacao: {
    type: DataTypes.DATE
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'dispositivos_autorizados',
  timestamps: false
});

// Modelo de Log de Acesso
const LogAcesso = sequelize.define('LogAcesso', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  device_id: {
    type: DataTypes.STRING
  },
  ip: {
    type: DataTypes.STRING
  },
  user_agent: {
    type: DataTypes.TEXT
  },
  acao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_hora: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'logs_acesso',
  timestamps: false
});

// Relacionamentos
Usuario.belongsTo(Perfil, { foreignKey: 'perfil_id', as: 'perfil' });
Perfil.hasMany(Usuario, { foreignKey: 'perfil_id' });

Usuario.hasMany(DispositivoAutorizado, { foreignKey: 'usuario_id' });
DispositivoAutorizado.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Usuario.hasMany(LogAcesso, { foreignKey: 'usuario_id' });
LogAcesso.belongsTo(Usuario, { foreignKey: 'usuario_id' });

// Exportação dos modelos
module.exports = {
  sequelize,
  Perfil,
  Usuario,
  DispositivoAutorizado,
  LogAcesso
};
