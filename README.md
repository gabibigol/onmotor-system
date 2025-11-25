# 🚗 OnMotor - Sistema de Gestão para Oficinas Mecânicas

Sistema completo de gestão para oficinas mecânicas com 9 módulos integrados, autenticação JWT e controle de dispositivos.

---

## 📋 Sobre o Sistema

O **OnMotor** é um sistema web completo desenvolvido para facilitar a gestão de oficinas mecânicas, oferecendo controle total sobre serviços, vendas, estoque, clientes, financeiro e muito mais.

### ✨ Características Principais

- ✅ **9 Módulos Completos**: Gerência, Serviços, Vendas, Clientes, Estoque, Fornecedores, RH, Financeiro e Fiscal
- ✅ **Autenticação Segura**: JWT + bcrypt com hash de 10 rounds
- ✅ **Controle de Dispositivos**: Limite de 3 dispositivos por usuário
- ✅ **3 Perfis de Usuário**: Administrador, Gerente e Atendente
- ✅ **Interface Moderna**: React + Material UI
- ✅ **API RESTful**: Node.js + Express + Sequelize
- ✅ **Banco de Dados**: PostgreSQL 16

---

## 🏗️ Arquitetura

```
┌─────────────────────────────────────────┐
│  FRONTEND (React + Material UI)         │
│  - 9 módulos completos                  │
│  - Interface responsiva                 │
│  - Autenticação JWT                     │
└─────────────────┬───────────────────────┘
                  │
                  │ HTTPS/REST API
                  │
┌─────────────────▼───────────────────────┐
│  BACKEND (Node.js + Express)            │
│  - API RESTful                          │
│  - Autenticação JWT                     │
│  - Controle de dispositivos             │
│  - Logs detalhados                      │
└─────────────────┬───────────────────────┘
                  │
                  │ Sequelize ORM
                  │
┌─────────────────▼───────────────────────┐
│  BANCO DE DADOS (PostgreSQL 16)         │
│  - Tabelas: perfis, usuarios,           │
│    dispositivos_autorizados,            │
│    logs_acesso                          │
└─────────────────────────────────────────┘
```

---

## 🚀 Deploy no Render

Este sistema está pronto para deploy no Render (plano gratuito).

### 📦 Estrutura do Projeto

```
onmotor-system/
├── backend/              # API Node.js + Express
│   ├── src/
│   │   ├── config/       # Configurações (database.js)
│   │   ├── controllers/  # Controladores (authController.js)
│   │   ├── middlewares/  # Middlewares (auth, deviceLimiter)
│   │   ├── models/       # Modelos Sequelize
│   │   ├── routes/       # Rotas da API
│   │   ├── services/     # Serviços (deviceService)
│   │   └── server.js     # Servidor principal
│   └── package.json
│
├── frontend/             # App React
│   ├── public/
│   ├── src/
│   │   ├── components/   # Componentes reutilizáveis
│   │   ├── pages/        # Páginas dos módulos
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── database/             # Scripts SQL
│   └── init.sql          # Inicialização do banco
│
├── README.md             # Este arquivo
└── DEPLOY_GUIDE.md       # Guia completo de deploy
```

---

## 🔧 Stack Tecnológica

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js 4.18
- **ORM**: Sequelize 6.25
- **Autenticação**: JWT (jsonwebtoken 9.0) + bcrypt (bcryptjs 2.4)
- **Banco**: PostgreSQL 16 (pg 8.8)
- **Validação**: express-validator 6.14
- **CORS**: cors 2.8
- **Logs**: morgan 1.10

### Frontend
- **Framework**: React 18.2
- **UI Library**: Material UI 5.10
- **Roteamento**: React Router 6.4
- **Estado**: Redux Toolkit 1.9
- **Requisições**: Axios 1.1
- **Gráficos**: Chart.js 4.0 + Recharts 2.1
- **Formulários**: Formik 2.2 + Yup 0.32

### Infraestrutura
- **Hospedagem**: Render (Free Tier)
- **Banco**: PostgreSQL gerenciado (Render)
- **SSL**: Automático (Render)
- **Deploy**: Git push automático

---

## 📝 Módulos do Sistema

### 1. 🏢 Gerência
Dashboard com visão geral, KPIs e gráficos de desempenho.

### 2. 🔧 Serviços
Gestão de ordens de serviço, mecânicos e status de atendimento.

### 3. 💰 Vendas
Controle de vendas, orçamentos e histórico de transações.

### 4. 👥 Clientes
Cadastro completo de clientes com histórico de serviços.

### 5. 📦 Estoque
Controle de peças, produtos e movimentações de estoque.

### 6. 🏭 Fornecedores
Gestão de fornecedores e pedidos de compra.

### 7. 👨‍💼 RH
Recursos humanos, funcionários e folha de pagamento.

### 8. 💳 Financeiro
Contas a pagar, contas a receber e fluxo de caixa.

### 9. 📄 Fiscal
Notas fiscais, impostos e obrigações fiscais.

---

## 🔐 Segurança

### Autenticação
- **JWT** com expiração de 24 horas
- **Senhas** com bcrypt (10 rounds)
- **Tokens** armazenados no localStorage

### Controle de Dispositivos
- Limite de **3 dispositivos** por usuário
- Identificação por **device_id** único
- Logs de acesso com **IP** e **user-agent**
- Possibilidade de **revogar** dispositivos

### Perfis de Usuário
1. **Administrador**: Acesso total ao sistema
2. **Gerente**: Gerenciamento de operações
3. **Atendente**: Atendimento e vendas

---

## 🎯 Credenciais Padrão

```
Email: admin@onmotor.com
Senha: admin123
Perfil: Administrador
```

⚠️ **IMPORTANTE**: Altere a senha após o primeiro acesso!

---

## 📚 Documentação

### Guias Disponíveis

- **DEPLOY_GUIDE.md**: Guia completo de deploy no Render
- **database/init.sql**: Script de inicialização do banco
- **backend/.env.example**: Exemplo de variáveis de ambiente do backend
- **frontend/.env.example**: Exemplo de variáveis de ambiente do frontend

### API Endpoints

#### Autenticação
- `POST /api/auth/login` - Login de usuário
- `POST /api/auth/registro` - Registro de novo usuário
- `GET /api/auth/dispositivos` - Listar dispositivos autorizados
- `PUT /api/auth/dispositivos/:id` - Renomear dispositivo
- `DELETE /api/auth/dispositivos/:id` - Revogar dispositivo

#### Health Check
- `GET /api/health` - Status da API e conexão com banco

---

## 🛠️ Desenvolvimento Local

### Pré-requisitos
- Node.js 18+
- PostgreSQL 14+
- npm ou yarn

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Configure as variáveis de ambiente
npm run dev
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
# Configure REACT_APP_API_URL
npm start
```

---

## 📊 Banco de Dados

### Tabelas Principais

- **perfis**: Perfis de usuário (Admin, Gerente, Atendente)
- **usuarios**: Usuários do sistema
- **dispositivos_autorizados**: Dispositivos autorizados por usuário
- **logs_acesso**: Logs de acesso ao sistema

### Relacionamentos

```
perfis (1) ──< (N) usuarios
usuarios (1) ──< (N) dispositivos_autorizados
usuarios (1) ──< (N) logs_acesso
```

---

## 🚀 Como Fazer Deploy

Siga o guia completo em **DEPLOY_GUIDE.md** para fazer o deploy no Render.

### Resumo Rápido

1. **Criar repositório** no GitHub
2. **Push do código** para o repositório
3. **Criar banco PostgreSQL** no Render
4. **Executar script SQL** de inicialização
5. **Deploy do backend** no Render
6. **Deploy do frontend** no Render
7. **Testar o sistema**

---

## 📞 Suporte

Para problemas ou dúvidas:

1. Verifique os logs no Render Dashboard
2. Consulte o guia de troubleshooting em DEPLOY_GUIDE.md
3. Teste cada componente individualmente

---

## 📄 Licença

Este projeto foi desenvolvido para uso em oficinas mecânicas.

---

## 🎉 Resultado Final

Após o deploy, você terá:

✅ Sistema OnMotor 100% funcional  
✅ Hospedado no Render (gratuito)  
✅ 9 módulos completos acessíveis  
✅ Autenticação segura com JWT  
✅ Controle de dispositivos ativo  
✅ Pronto para uso em produção  

---

**Desenvolvido com ❤️ para oficinas mecânicas**
