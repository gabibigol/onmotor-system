import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';

const FiscalModule = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Módulo Fiscal
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Notas Fiscais Emitidas
            </Typography>
            <Typography component="p" variant="h4">
              152
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Mês atual
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Valor Total NF-e
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
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Impostos
            </Typography>
            <Typography component="p" variant="h4">
              R$ 15.174,09
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              A recolher
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Notas Fiscais Recentes</Typography>
              <Button variant="contained" color="primary">
                Nova Nota Fiscal
              </Button>
            </Box>
            <Typography variant="body1">
              Lista de notas fiscais será exibida aqui
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FiscalModule;
