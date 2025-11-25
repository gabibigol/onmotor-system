import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';

const GerenciaModule = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Módulo de Gerência
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140, bgcolor: '#e3f2fd' }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Faturamento Total
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
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140, bgcolor: '#e8f5e9' }}>
            <Typography component="h2" variant="h6" color="success.dark" gutterBottom>
              Lucro Líquido
            </Typography>
            <Typography component="p" variant="h4">
              R$ 31.500,25
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Mês atual
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Desempenho
            </Typography>
            <Typography component="p" variant="h4">
              +12,5%
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Em relação ao mês anterior
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Indicadores de Desempenho</Typography>
              <Button variant="contained" color="primary">
                Gerar Relatório
              </Button>
            </Box>
            <Typography variant="body1">
              Gráficos e indicadores serão exibidos aqui
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GerenciaModule;
