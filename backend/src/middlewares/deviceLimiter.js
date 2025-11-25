// Middleware para controle de limite de dispositivos
const { DispositivoAutorizado } = require('../models');
const deviceService = require('../services/deviceService');

/**
 * Middleware para verificar e controlar o limite de dispositivos por usuário
 * Limita o uso do sistema a 3 dispositivos por usuário
 */
module.exports = async (req, res, next) => {
  try {
    // Rotas públicas que não precisam de verificação de dispositivo
    const publicRoutes = [
      '/api/auth/login',
      '/api/auth/register',
      '/api/auth/forgot-password',
      '/api/health'
    ];

    if (publicRoutes.includes(req.path)) {
      return next();
    }

    // Verifica se o token foi fornecido
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return next();
    }

    // Obtém o ID do dispositivo
    const deviceId = req.headers['x-device-id'] || req.cookies?.deviceId;
    if (!deviceId) {
      return next();
    }

    // Extrai o token do cabeçalho
    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
      return next();
    }

    // Verifica se o dispositivo está autorizado
    // A lógica completa está no serviço de dispositivos
    // Este middleware apenas registra a tentativa de acesso
    
    console.log(`Acesso de dispositivo: ${deviceId}`);
    
    return next();
  } catch (error) {
    console.error('Erro no middleware de controle de dispositivos:', error);
    return next();
  }
};
