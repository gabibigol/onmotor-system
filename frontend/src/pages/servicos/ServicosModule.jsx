import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';

const ServicosModule = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Módulo de Serviços
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Ordens de Serviço
            </Typography>
            <Typography component="p" variant="h4">
              65
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              15 em andamento
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Faturamento Mensal
            </Typography>
            <Typography component="p" variant="h4">
              R$ 38.500,00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Serviços realizados
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Ticket Médio
            </Typography>
            <Typography component="p" variant="h4">
              R$ 592,31
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Últimos 30 dias
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Ordens de Serviço Recentes</Typography>
              <Button variant="contained" color="primary">
                Nova Ordem de Serviço
              </Button>
            </Box>
            <Typography variant="body1">
              Lista de ordens de serviço será exibida aqui
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicosModule;
