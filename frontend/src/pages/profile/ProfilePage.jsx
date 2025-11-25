import React from 'react';
import { Box, Typography, Container, Grid, Paper, TextField, Button } from '@mui/material';

const ProfilePage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Meu Perfil
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  bgcolor: '#e0e0e0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2
                }}
              >
                <Typography variant="h3">A</Typography>
              </Box>
              <Button variant="outlined" size="small">
                Alterar foto
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={8}>
            <Typography variant="h6" gutterBottom>
              Informações Pessoais
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nome completo"
                  defaultValue="Administrador"
                  variant="outlined"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  defaultValue="admin@onmotor.com"
                  variant="outlined"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Cargo"
                  defaultValue="Gerente"
                  variant="outlined"
                />
              </Grid>
              
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Salvar alterações
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Alterar Senha
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Senha atual"
              type="password"
              variant="outlined"
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nova senha"
              type="password"
              variant="outlined"
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirmar nova senha"
              type="password"
              variant="outlined"
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Atualizar senha
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
