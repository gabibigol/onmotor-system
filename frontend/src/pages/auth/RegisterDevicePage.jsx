import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const RegisterDevicePage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Registro de Novo Dispositivo
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Página de registro de dispositivo em construção.
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterDevicePage;
