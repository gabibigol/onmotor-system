import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const ForgotPasswordPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Recuperação de Senha
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Página de recuperação de senha em construção.
        </Typography>
      </Box>
    </Container>
  );
};

export default ForgotPasswordPage;
