import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';

const FinanceiroModule = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Módulo Financeiro
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140, bgcolor: '#e8f5e9' }}>
            <Typography component="h2" variant="h6" color="success.dark" gutterBottom>
              Receitas
            </Typography>
            <Typography component="p" variant="h4">
              R$ 84.300,50
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Mês atual
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140, bgcolor: '#ffebee' }}>
            <Typography component="h2" variant="h6" color="error" gutterBottom>
              Despesas
            </Typography>
            <Typography component="p" variant="h4">
              R$ 52.800,25
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Mês atual
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140, bgcolor: '#e3f2fd' }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Lucro
            </Typography>
            <Typography component="p" variant="h4">
              R$ 31.500,25
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Margem: 37,4%
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Lançamentos Recentes</Typography>
              <Button variant="contained" color="primary">
                Novo Lançamento
              </Button>
            </Box>
            <Typography variant="body1">
              Lista de lançamentos financeiros será exibida aqui
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FinanceiroModule;
