import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';

const RHModule = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Módulo de RH
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Total de Colaboradores
            </Typography>
            <Typography component="p" variant="h4">
              24
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Ativos
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Folha de Pagamento
            </Typography>
            <Typography component="p" variant="h4">
              R$ 45.800,00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Mês atual
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Produtividade
            </Typography>
            <Typography component="p" variant="h4">
              87%
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Média mensal
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Colaboradores</Typography>
              <Button variant="contained" color="primary">
                Novo Colaborador
              </Button>
            </Box>
            <Typography variant="body1">
              Lista de colaboradores será exibida aqui
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RHModule;
