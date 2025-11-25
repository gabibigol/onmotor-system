import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';

const ClientesModule = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Módulo de Clientes
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Total de Clientes
            </Typography>
            <Typography component="p" variant="h4">
              245
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              18 novos este mês
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Clientes Ativos
            </Typography>
            <Typography component="p" variant="h4">
              187
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              76% do total
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
              <Typography variant="h6">Clientes Recentes</Typography>
              <Button variant="contained" color="primary">
                Novo Cliente
              </Button>
            </Box>
            <Typography variant="body1">
              Lista de clientes será exibida aqui
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClientesModule;
