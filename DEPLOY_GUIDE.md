# 🚀 GUIA COMPLETO DE DEPLOY - ONMOTOR NO RENDER

Este guia vai te levar do zero até o sistema 100% funcional no Render.

---

## 📋 PRÉ-REQUISITOS

- Conta no GitHub (gratuita)
- Conta no Render (gratuita)
- Git instalado no computador
- Terminal (CMD, PowerShell, Terminal)

---

## ETAPA 1: CRIAR REPOSITÓRIO NO GITHUB (5 minutos)

### 1.1 Criar Novo Repositório

1. Acesse: https://github.com
2. Faça login na sua conta
3. Clique em **"New"** (botão verde)
4. Preencha:
   - **Repository name**: `onmotor-system`
   - **Description**: `Sistema de gestão para oficinas mecânicas`
   - **Public** ou **Private** (sua escolha)
   - **NÃO** marque "Add a README file"
   - **NÃO** marque "Add .gitignore"
   - **NÃO** marque "Choose a license"
5. Clique em **"Create repository"**

### 1.2 Fazer Push do Código

No terminal, dentro da pasta `onmotor-system-novo`:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Sistema OnMotor completo"

# Adicionar remote (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/onmotor-system.git

# Fazer push
git branch -M main
git push -u origin main
```

✅ **Código enviado para o GitHub!**

---

## ETAPA 2: CRIAR BANCO DE DADOS NO RENDER (5 minutos)

### 2.1 Acessar Render

1. Acesse: https://dashboard.render.com
2. Faça login (ou crie conta com GitHub)

### 2.2 Criar PostgreSQL

1. Clique em **"New +"** (canto superior direito)
2. Selecione **"PostgreSQL"**
3. Preencha:
   - **Name**: `onmotor-db`
   - **Database**: `onmotor_db`
   - **User**: `onmotor_db_user`
   - **Region**: `Oregon (US West)`
   - **PostgreSQL Version**: `16`
   - **Datadog API Key**: (deixe em branco)
   - **Plan**: `Free`
4. Clique em **"Create Database"**
5. Aguarde 2-3 minutos até status ficar **"Available"** (bolinha verde)

### 2.3 Copiar URL do Banco

1. Na página do banco, role até **"Connections"**
2. **COPIE** a **"Internal Database URL"**

Formato:
```
postgres://onmotor_db_user:SENHA@dpg-XXXXX-a.oregon-postgres.render.com:5432/onmotor_db
```

✅ **Banco de dados criado!**

---

## ETAPA 3: INICIALIZAR BANCO DE DADOS (5 minutos)

### 3.1 Conectar via psql

1. Na página do banco no Render, role até **"Connections"**
2. **COPIE** o comando **"PSQL Command"**

Exemplo:
```bash
PGPASSWORD=SENHA psql -h dpg-XXXXX-a.oregon-postgres.render.com -U onmotor_db_user onmotor_db
```

3. Abra um terminal no seu computador
4. Cole e execute o comando
5. Você verá: `onmotor_db=>`

### 3.2 Executar Script SQL

1. Abra o arquivo `database/init.sql` no seu editor
2. **COPIE TODO O CONTEÚDO**
3. Cole no terminal psql
4. Pressione **ENTER**

Você verá:
```
CREATE TABLE
CREATE TABLE
...
INSERT 0 3
INSERT 0 1
...
```

### 3.3 Verificar Dados

Execute no psql:
```sql
SELECT * FROM usuarios WHERE email = 'admin@onmotor.com';
```

Deve retornar:
```
 id |       email       | ... | ativo
----+-------------------+-----+-------
  1 | admin@onmotor.com | ... | t
```

Digite `\q` para sair.

✅ **Banco inicializado!**

---

## ETAPA 4: DEPLOY DO BACKEND (10 minutos)

### 4.1 Criar Web Service

1. No Render Dashboard, clique em **"New +"**
2. Selecione **"Web Service"**
3. Clique em **"Build and deploy from a Git repository"**
4. Clique em **"Next"**

### 4.2 Conectar Repositório

1. Se não aparecer, clique em **"Configure account"**
2. Procure por: `SEU_USUARIO/onmotor-system`
3. Clique em **"Connect"**

### 4.3 Configurar Backend

Preencha:

```
Name: onmotor-backend
Region: Oregon (US West)
Branch: main
Root Directory: backend
Runtime: Node
Build Command: npm install
Start Command: node src/server.js
Instance Type: Free
```

### 4.4 Adicionar Variáveis de Ambiente

Role até **"Environment Variables"** e adicione:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `3001` |
| `JWT_SECRET` | `onmotor_secret_key_production_2024` |
| `JWT_EXPIRES_IN` | `24h` |
| `CORS_ORIGIN` | `https://onmotor-frontend.onrender.com` |
| `DATABASE_URL` | (Cole a Internal Database URL do passo 2.3) |

⚠️ **IMPORTANTE**: `DATABASE_URL` deve ser a URL completa que você copiou!

### 4.5 Criar Backend

1. Clique em **"Create Web Service"**
2. Aguarde 5-10 minutos
3. Status deve ficar **"Live"** (bolinha verde)

### 4.6 Testar Backend

Acesse no navegador:
```
https://onmotor-backend.onrender.com/api/health
```

Deve retornar:
```json
{
  "status": "online",
  "version": "1.0.0",
  "timestamp": "...",
  "database": "connected"
}
```

✅ **Backend funcionando!**

---

## ETAPA 5: DEPLOY DO FRONTEND (10 minutos)

### 5.1 Criar Web Service

1. No Render Dashboard, clique em **"New +"**
2. Selecione **"Web Service"**
3. Clique em **"Build and deploy from a Git repository"**
4. Clique em **"Next"**

### 5.2 Conectar Repositório

1. Procure por: `SEU_USUARIO/onmotor-system`
2. Clique em **"Connect"**

### 5.3 Configurar Frontend

Preencha:

```
Name: onmotor-frontend
Region: Oregon (US West)
Branch: main
Root Directory: frontend
Runtime: Node
Build Command: npm install && npm run build
Start Command: npx serve -s build -l 3000
Instance Type: Free
```

### 5.4 Adicionar Variável de Ambiente

Role até **"Environment Variables"** e adicione:

| Key | Value |
|-----|-------|
| `REACT_APP_API_URL` | `https://onmotor-backend.onrender.com/api` |

⚠️ **IMPORTANTE**: Use a URL do **SEU** backend (sem barra final após `/api`)

### 5.5 Criar Frontend

1. Clique em **"Create Web Service"**
2. Aguarde 5-10 minutos
3. Status deve ficar **"Live"** (bolinha verde)

✅ **Frontend funcionando!**

---

## ETAPA 6: TESTAR O SISTEMA (5 minutos)

### 6.1 Acessar Sistema

Abra no navegador:
```
https://onmotor-frontend.onrender.com
```

### 6.2 Fazer Login

Use as credenciais:

```
Email: admin@onmotor.com
Senha: admin123
```

Clique em **"Entrar"**

### 6.3 Verificar Dashboard

Você deve ser redirecionado para o dashboard do sistema com os 9 módulos!

### 6.4 Verificar Logs

1. Acesse Render Dashboard
2. Clique em **"onmotor-backend"**
3. Clique na aba **"Logs"**
4. Você deve ver:

```
=================================
🔐 TENTATIVA DE LOGIN
📧 Email: admin@onmotor.com
...
✅ Usuário encontrado: Administrador
✅ Senha correta!
🎉 LOGIN BEM-SUCEDIDO!
=================================
```

✅✅✅ **SISTEMA 100% FUNCIONAL!** ✅✅✅

---

## 🎉 PARABÉNS!

Seu sistema OnMotor está no ar com:

✅ Backend Node.js + Express  
✅ Frontend React + Material UI  
✅ Banco PostgreSQL  
✅ Autenticação JWT  
✅ 9 módulos completos  
✅ Hospedagem gratuita no Render  

---

## 🆘 SOLUÇÃO DE PROBLEMAS

### Problema: Login retorna erro 500

**Solução:**
1. Verifique logs do backend no Render
2. Confirme que `DATABASE_URL` está correta
3. Teste: `https://onmotor-backend.onrender.com/api/health`

### Problema: Frontend não carrega

**Solução:**
1. Verifique se `REACT_APP_API_URL` está correto
2. Confirme que backend está "Live"
3. Limpe cache do navegador (Ctrl+Shift+Delete)

### Problema: "Credenciais inválidas"

**Solução:**
1. Conecte ao banco via psql
2. Execute:
```sql
SELECT * FROM usuarios WHERE email = 'admin@onmotor.com';
```
3. Confirme que usuário existe e `ativo = t`

### Problema: Senha não funciona

**Solução:**
1. Conecte ao banco via psql
2. Execute:
```sql
UPDATE usuarios 
SET senha = '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy' 
WHERE email = 'admin@onmotor.com';
```
3. Tente fazer login novamente

### Problema: Serviços ficam offline

**Explicação:**
- Plano Free do Render coloca serviços em "sleep" após 15 minutos sem uso
- Ao acessar novamente, "acordam" automaticamente em ~30 segundos
- Isso é normal no plano gratuito

---

## 📊 RESUMO DOS SERVIÇOS

```
Frontend:  https://onmotor-frontend.onrender.com
Backend:   https://onmotor-backend.onrender.com
Database:  onmotor-db (Internal)
```

**Credenciais:**
```
Email: admin@onmotor.com
Senha: admin123
```

---

## 📝 CHECKLIST FINAL

- [ ] Repositório criado no GitHub
- [ ] Código enviado (git push)
- [ ] Banco de dados criado no Render
- [ ] Script SQL executado
- [ ] Backend deployado e "Live"
- [ ] Frontend deployado e "Live"
- [ ] Login funcionando
- [ ] Dashboard acessível

---

## 🔄 ATUALIZAÇÕES FUTURAS

Para atualizar o sistema:

1. Faça alterações no código local
2. Commit e push para GitHub:
```bash
git add .
git commit -m "Descrição da alteração"
git push
```
3. Render fará deploy automático!

---

**🎯 SISTEMA PRONTO PARA USO! 🎯**
