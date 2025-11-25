// Middleware de autenticação
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // Verifica se o token foi fornecido
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'Token não fornecido' });
    }

    // Extrai o token do cabeçalho
    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
      return res.status(401).json({ error: 'Formato de token inválido' });
    }

    // Verifica e decodifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'onmotor_secret_key_development');
    
    // Adiciona os dados do usuário ao objeto de requisição
    req.user = decoded;
    
    return next();
  } catch (error) {
    console.error('Erro na autenticação:', error);
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expirado' });
    }
    
    return res.status(401).json({ error: 'Token inválido' });
  }
};
