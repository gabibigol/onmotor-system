import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';

const DeviceManager = () => {
  // Dados simulados de dispositivos
  const devices = [
    { id: 1, nome_dispositivo: 'Computador do Escritório', ultimo_acesso: '2025-11-24 14:30:22' },
    { id: 2, nome_dispositivo: 'Smartphone', ultimo_acesso: '2025-11-24 10:15:45' },
    { id: 3, nome_dispositivo: 'Tablet da Oficina', ultimo_acesso: '2025-11-23 18:45:12' }
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Gerenciamento de Dispositivos
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="body1" paragraph>
          Seu acesso ao sistema OnMotor está limitado a 3 dispositivos. 
          Você pode gerenciar seus dispositivos autorizados abaixo.
        </Typography>
        
        <Typography variant="subtitle1" color="primary" gutterBottom>
          Dispositivos Autorizados: {devices.length}/3
        </Typography>
      </Paper>
      
      {devices.map((device) => (
        <Paper key={device.id} sx={{ p: 3, mb: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">{device.nome_dispositivo}</Typography>
              <Typography variant="body2" color="text.secondary">
                Último acesso: {device.ultimo_acesso}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: { sm: 'right' } }}>
              <Button 
                variant="outlined" 
                color="primary" 
                sx={{ mr: 1 }}
              >
                Renomear
              </Button>
              <Button 
                variant="outlined" 
                color="error"
              >
                Revogar Acesso
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};

export default DeviceManager;
