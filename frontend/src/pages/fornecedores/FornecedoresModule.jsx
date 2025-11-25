import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';

const FornecedoresModule = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Módulo de Fornecedores
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Total de Fornecedores
            </Typography>
            <Typography component="p" variant="h4">
              78
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Cadastrados
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Compras Mensais
            </Typography>
            <Typography component="p" variant="h4">
              R$ 28.500,00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Mês atual
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Pedidos em Aberto
            </Typography>
            <Typography component="p" variant="h4">
              12
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Aguardando entrega
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Fornecedores</Typography>
              <Button variant="contained" color="primary">
                Novo Fornecedor
              </Button>
            </Box>
            <Typography variant="body1">
              Lista de fornecedores será exibida aqui
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FornecedoresModule;
