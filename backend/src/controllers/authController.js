const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Usuario, DispositivoAutorizado, Perfil } = require('../models');
const deviceService = require('../services/deviceService');

const authController = {
  login: async (req, res) => {
    try {
      const { email, senha, deviceId } = req.body;
      
      console.log('=================================');
      console.log('🔐 TENTATIVA DE LOGIN');
      console.log('📧 Email:', email);
      console.log('🔑 Senha recebida:', senha ? '***' : 'NÃO ENVIADA');
      console.log('📱 Device ID:', deviceId);
      console.log('=================================');
      
      if (!email || !senha) {
        console.log('❌ Validação falhou: email ou senha não fornecidos');
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
      }
      
      console.log('🔍 Buscando usuário no banco...');
      const usuario = await Usuario.findOne({ 
        where: { email, ativo: true },
        include: [{ model: Perfil, as: 'perfil' }]
      });
      
      if (!usuario) {
        console.log('❌ Usuário não encontrado ou inativo');
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }
      
      console.log('✅ Usuário encontrado:', usuario.nome);
      console.log('🔐 Hash da senha no banco:', usuario.senha.substring(0, 20) + '...');
      
      console.log('🔄 Verificando senha com bcrypt...');
      const senhaValida = await bcrypt.compare(senha, usuario.senha);
      console.log('🔐 Senha válida:', senhaValida);
      
      if (!senhaValida) {
        console.log('❌ Senha incorreta');
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }
      
      console.log('✅ Senha correta!');
      
      if (deviceId) {
        console.log('📱 Verificando limite de dispositivos...');
        const userAgent = req.headers['user-agent'] || 'Desconhecido';
        const autorizado = await deviceService.verificarLimiteDispositivos(usuario.id, deviceId, userAgent);
        if (!autorizado) {
          console.log('❌ Limite de dispositivos atingido');
          return res.status(403).json({ 
            error: 'Limite de dispositivos atingido', 
            code: 'DEVICE_LIMIT_REACHED',
            message: 'Você atingiu o limite de 3 dispositivos autorizados.'
          });
        }
        console.log('✅ Dispositivo autorizado');
      }
      
      await usuario.update({ ultimo_acesso: new Date() });
      
      console.log('🎫 Gerando token JWT...');
      const token = jwt.sign(
        { 
          id: usuario.id, 
          email: usuario.email, 
          perfil_id: usuario.perfil_id,
          role: usuario.perfil ? usuario.perfil.nome : 'user'
        },
        process.env.JWT_SECRET || 'onmotor_secret_key_development',
        { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
      );
      
      console.log('✅ Token gerado com sucesso');
      console.log('=================================');
      console.log('🎉 LOGIN BEM-SUCEDIDO!');
      console.log('👤 Usuário:', usuario.nome);
      console.log('📧 Email:', usuario.email);
      console.log('=================================');
      
      return res.json({
        user: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          perfil: usuario.perfil ? usuario.perfil.nome : null,
          perfil_id: usuario.perfil_id
        },
        token,
        deviceId
      });
    } catch (error) {
      console.error('=================================');
      console.error('❌ ERRO NO LOGIN:');
      console.error('Mensagem:', error.message);
      console.error('Stack:', error.stack);
      console.error('=================================');
      return res.status(500).json({ 
        error: 'Erro interno do servidor',
        message: error.message 
      });
    }
  },
  
  listarDispositivos: async (req, res) => {
    try {
      const usuarioId = req.user.id;
      const dispositivos = await deviceService.listarDispositivosAutorizados(usuarioId);
      return res.json({ dispositivos });
    } catch (error) {
      console.error('Erro ao listar dispositivos:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
  
  renomearDispositivo: async (req, res) => {
    try {
      const usuarioId = req.user.id;
      const { dispositivoId } = req.params;
      const { nome } = req.body;
      
      if (!nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
      }
      
      const dispositivo = await deviceService.renomearDispositivo(usuarioId, dispositivoId, nome);
      
      return res.json({ 
        message: 'Dispositivo renomeado com sucesso',
        dispositivo 
      });
    } catch (error) {
      console.error('Erro ao renomear dispositivo:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
  
  revogarDispositivo: async (req, res) => {
    try {
      const usuarioId = req.user.id;
      const { dispositivoId } = req.params;
      
      const sucesso = await deviceService.revogarDispositivo(usuarioId, dispositivoId);
      
      if (!sucesso) {
        return res.status(404).json({ error: 'Dispositivo não encontrado' });
      }
      
      return res.json({ 
        message: 'Dispositivo revogado com sucesso' 
      });
    } catch (error) {
      console.error('Erro ao revogar dispositivo:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
  
  registro: async (req, res) => {
    try {
      const { nome, email, senha, perfil_id } = req.body;
      
      if (!nome || !email || !senha) {
        return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
      }
      
      const usuarioExistente = await Usuario.findOne({ where: { email } });
      if (usuarioExistente) {
        return res.status(400).json({ error: 'Email já cadastrado' });
      }
      
      const senhaHash = await bcrypt.hash(senha, 10);
      
      const novoUsuario = await Usuario.create({
        nome,
        email,
        senha: senhaHash,
        perfil_id: perfil_id || 3,
        ativo: true
      });
      
      return res.status(201).json({
        message: 'Usuário criado com sucesso',
        user: {
          id: novoUsuario.id,
          nome: novoUsuario.nome,
          email: novoUsuario.email
        }
      });
    } catch (error) {
      console.error('Erro no registro:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
};

module.exports = authController;
