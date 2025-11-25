import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';

const EstoqueModule = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Módulo de Estoque
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Total de Produtos
            </Typography>
            <Typography component="p" variant="h4">
              1.245
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Em estoque
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Valor do Estoque
            </Typography>
            <Typography component="p" variant="h4">
              R$ 285.750,00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Custo total
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140, bgcolor: '#ffebee' }}>
            <Typography component="h2" variant="h6" color="error" gutterBottom>
              Produtos em Baixa
            </Typography>
            <Typography component="p" variant="h4">
              23
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Abaixo do estoque mínimo
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Produtos</Typography>
              <Button variant="contained" color="primary">
                Novo Produto
              </Button>
            </Box>
            <Typography variant="body1">
              Lista de produtos será exibida aqui
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EstoqueModule;
