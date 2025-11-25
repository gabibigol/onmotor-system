// Serviço para gerenciamento de dispositivos autorizados
const { DispositivoAutorizado, Usuario, LogAcesso } = require('../models');
const { Op } = require('sequelize');

/**
 * Serviço para gerenciamento de dispositivos autorizados
 * Implementa a lógica de limitação de 3 dispositivos por usuário
 */
const deviceService = {
  /**
   * Verifica se o dispositivo está autorizado ou pode ser autorizado
   * @param {number} usuarioId - ID do usuário
   * @param {string} deviceId - ID do dispositivo
   * @returns {Promise<boolean>} - true se autorizado, false caso contrário
   */
  verificarLimiteDispositivos: async (usuarioId, deviceId, userAgent = 'Desconhecido') => {
    try {
      // Verifica se o dispositivo já está autorizado
      const dispositivoExistente = await DispositivoAutorizado.findOne({
        where: {
          usuario_id: usuarioId,
          device_id: deviceId,
          ativo: true
        }
      });

      // Se o dispositivo já está autorizado, atualiza o último acesso
      if (dispositivoExistente) {
        await dispositivoExistente.update({
          ultimo_acesso: new Date()
        });
        return true;
      }

      // Verifica quantos dispositivos o usuário já tem autorizados
      const dispositivosAtivos = await DispositivoAutorizado.count({
        where: {
          usuario_id: usuarioId,
          ativo: true
        }
      });

      // Se o usuário já tem 3 dispositivos autorizados, não permite mais
      if (dispositivosAtivos >= 3) {
        return false;
      }

      // Autoriza o novo dispositivo
      const nomeDispositivo = userAgent.includes('Mobile') ? 'Dispositivo Móvel' : 'Computador';
      
      await DispositivoAutorizado.create({
        usuario_id: usuarioId,
        device_id: deviceId,
        nome_dispositivo: `${nomeDispositivo} (${new Date().toLocaleDateString()})`,
        user_agent: userAgent,
        data_autorizacao: new Date(),
        ultimo_acesso: new Date(),
        ativo: true
      });

      return true;
    } catch (error) {
      console.error('Erro ao verificar limite de dispositivos:', error);
      return false;
    }
  },

  /**
   * Lista todos os dispositivos autorizados de um usuário
   * @param {number} usuarioId - ID do usuário
   * @returns {Promise<Array>} - Lista de dispositivos autorizados
   */
  listarDispositivosAutorizados: async (usuarioId) => {
    try {
      const dispositivos = await DispositivoAutorizado.findAll({
        where: {
          usuario_id: usuarioId,
          ativo: true
        },
        order: [['ultimo_acesso', 'DESC']]
      });

      return dispositivos;
    } catch (error) {
      console.error('Erro ao listar dispositivos autorizados:', error);
      throw error;
    }
  },

  /**
   * Renomeia um dispositivo autorizado
   * @param {number} usuarioId - ID do usuário
   * @param {number} dispositivoId - ID do dispositivo
   * @param {string} novoNome - Novo nome para o dispositivo
   * @returns {Promise<Object>} - Dispositivo atualizado
   */
  renomearDispositivo: async (usuarioId, dispositivoId, novoNome) => {
    try {
      const dispositivo = await DispositivoAutorizado.findOne({
        where: {
          id: dispositivoId,
          usuario_id: usuarioId,
          ativo: true
        }
      });

      if (!dispositivo) {
        throw new Error('Dispositivo não encontrado ou não autorizado');
      }

      await dispositivo.update({
        nome_dispositivo: novoNome
      });

      return dispositivo;
    } catch (error) {
      console.error('Erro ao renomear dispositivo:', error);
      throw error;
    }
  },

  /**
   * Revoga a autorização de um dispositivo
   * @param {number} usuarioId - ID do usuário
   * @param {number} dispositivoId - ID do dispositivo
   * @returns {Promise<boolean>} - true se revogado com sucesso, false caso contrário
   */
  revogarDispositivo: async (usuarioId, dispositivoId) => {
    try {
      const dispositivo = await DispositivoAutorizado.findOne({
        where: {
          id: dispositivoId,
          usuario_id: usuarioId,
          ativo: true
        }
      });

      if (!dispositivo) {
        throw new Error('Dispositivo não encontrado ou não autorizado');
      }

      await dispositivo.update({
        ativo: false,
        data_revogacao: new Date()
      });

      return true;
    } catch (error) {
      console.error('Erro ao revogar dispositivo:', error);
      throw error;
    }
  }
};

module.exports = deviceService;
