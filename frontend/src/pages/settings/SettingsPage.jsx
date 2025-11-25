import React from 'react';
import { Box, Typography, Container, Grid, Paper, Switch, FormControlLabel, Button } from '@mui/material';

const SettingsPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Configurações
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Preferências do Sistema
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControlLabel 
              control={<Switch defaultChecked />} 
              label="Notificações por email" 
            />
          </Grid>
          
          <Grid item xs={12}>
            <FormControlLabel 
              control={<Switch defaultChecked />} 
              label="Alertas de estoque baixo" 
            />
          </Grid>
          
          <Grid item xs={12}>
            <FormControlLabel 
              control={<Switch />} 
              label="Modo escuro" 
            />
          </Grid>
          
          <Grid item xs={12}>
            <FormControlLabel 
              control={<Switch defaultChecked />} 
              label="Relatórios automáticos semanais" 
            />
          </Grid>
        </Grid>
      </Paper>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Configurações de Backup
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControlLabel 
              control={<Switch defaultChecked />} 
              label="Backup automático diário" 
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Realizar backup manual
            </Button>
          </Grid>
        </Grid>
      </Paper>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Configurações da Empresa
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Editar informações da empresa
            </Button>
          </Grid>
          
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Configurar impostos e alíquotas
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SettingsPage;
