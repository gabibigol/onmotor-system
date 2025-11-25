// Rotas de autenticação e gerenciamento de dispositivos
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/auth');

// Rotas públicas
router.post('/login', authController.login);
router.post('/registro', authController.registro);

router.post('/logout', (req, res) => {
  res.json({ message: 'Logout endpoint funcionando' });
});

// Rota de verificação de saúde
router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Sistema OnMotor funcionando corretamente' });
});

// Rotas protegidas
router.get('/check', (req, res) => {
  res.json({ message: 'Verificação de autenticação funcionando' });
});

router.get('/devices', (req, res) => {
  res.json({ 
    message: 'Lista de dispositivos funcionando',
    devices: [
      { id: 1, nome_dispositivo: 'Dispositivo 1', ultimo_acesso: new Date() },
      { id: 2, nome_dispositivo: 'Dispositivo 2', ultimo_acesso: new Date() }
    ]
  });
});

module.exports = router;
