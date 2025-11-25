-- Script de inicialização do banco de dados OnMotor
-- Execute este script no PostgreSQL do Render após criar o banco

-- 1. Criar tabela de perfis
CREATE TABLE IF NOT EXISTS perfis (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    permissoes JSONB
);

-- 2. Criar tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    perfil_id INTEGER NOT NULL REFERENCES perfis(id),
    ativo BOOLEAN DEFAULT true,
    ultimo_acesso TIMESTAMP
);

-- 3. Criar tabela de dispositivos autorizados
CREATE TABLE IF NOT EXISTS dispositivos_autorizados (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL REFERENCES usuarios(id),
    device_id VARCHAR(255) NOT NULL,
    nome_dispositivo VARCHAR(255) NOT NULL,
    user_agent TEXT,
    data_autorizacao TIMESTAMP NOT NULL,
    ultimo_acesso TIMESTAMP NOT NULL,
    data_revogacao TIMESTAMP,
    ativo BOOLEAN DEFAULT true
);

-- 4. Criar tabela de logs de acesso
CREATE TABLE IF NOT EXISTS logs_acesso (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL REFERENCES usuarios(id),
    device_id VARCHAR(255),
    ip VARCHAR(50),
    user_agent TEXT,
    acao VARCHAR(100) NOT NULL,
    data_hora TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 5. Inserir perfis padrão
INSERT INTO perfis (id, nome, descricao, permissoes) VALUES
(1, 'Administrador', 'Acesso total ao sistema', '{"all": true}'::jsonb),
(2, 'Gerente', 'Gerenciamento de operações', '{"read": true, "write": true, "reports": true}'::jsonb),
(3, 'Atendente', 'Atendimento e vendas', '{"read": true, "write": true}'::jsonb)
ON CONFLICT (id) DO NOTHING;

-- 6. Inserir usuário administrador
-- Senha: admin123
-- Hash bcrypt gerado com 10 rounds
INSERT INTO usuarios (id, nome, email, senha, perfil_id, ativo) VALUES
(1, 'Administrador', 'admin@onmotor.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 1, true)
ON CONFLICT (email) DO UPDATE SET
    senha = EXCLUDED.senha,
    ativo = EXCLUDED.ativo;

-- 7. Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_usuarios_email ON usuarios(email);
CREATE INDEX IF NOT EXISTS idx_dispositivos_usuario_id ON dispositivos_autorizados(usuario_id);
CREATE INDEX IF NOT EXISTS idx_dispositivos_device_id ON dispositivos_autorizados(device_id);
CREATE INDEX IF NOT EXISTS idx_logs_usuario_id ON logs_acesso(usuario_id);
CREATE INDEX IF NOT EXISTS idx_logs_data_hora ON logs_acesso(data_hora);

-- 8. Verificar dados inseridos
SELECT 'Perfis criados:' as info, COUNT(*) as total FROM perfis;
SELECT 'Usuários criados:' as info, COUNT(*) as total FROM usuarios;
SELECT 'Usuário admin:' as info, email, ativo FROM usuarios WHERE email = 'admin@onmotor.com';

-- Fim do script
