import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';

const VendasModule = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Módulo de Vendas
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Total de Vendas
            </Typography>
            <Typography component="p" variant="h4">
              87
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Mês atual
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Faturamento
            </Typography>
            <Typography component="p" variant="h4">
              R$ 45.800,50
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Vendas realizadas
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Ticket Médio
            </Typography>
            <Typography component="p" variant="h4">
              R$ 526,44
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Últimos 30 dias
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Vendas Recentes</Typography>
              <Button variant="contained" color="primary">
                Nova Venda
              </Button>
            </Box>
            <Typography variant="body1">
              Lista de vendas será exibida aqui
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VendasModule;
