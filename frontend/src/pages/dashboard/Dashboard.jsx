import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Resumo financeiro */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: '#e3f2fd',
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Faturamento Mensal
            </Typography>
            <Typography component="p" variant="h4">
              R$ 84.300,50
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Novembro 2025
            </Typography>
          </Paper>
        </Grid>
        
        {/* Ordens de serviço */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: '#e8f5e9',
            }}
          >
            <Typography component="h2" variant="h6" color="success.dark" gutterBottom>
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
        
        {/* Vendas */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: '#fff8e1',
            }}
          >
            <Typography component="h2" variant="h6" color="warning.dark" gutterBottom>
              Vendas
            </Typography>
            <Typography component="p" variant="h4">
              87
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Ticket médio: R$ 526,44
            </Typography>
          </Paper>
        </Grid>
        
        {/* Clientes */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: '#f3e5f5',
            }}
          >
            <Typography component="h2" variant="h6" color="secondary" gutterBottom>
              Clientes
            </Typography>
            <Typography component="p" variant="h4">
              245
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              18 novos este mês
            </Typography>
          </Paper>
        </Grid>
        
        {/* Gráfico principal */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Desempenho Mensal
            </Typography>
            <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1" color="text.secondary">
                Gráfico de desempenho será exibido aqui
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
