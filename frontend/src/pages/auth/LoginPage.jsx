import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Container, Alert, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    deviceId: crypto.randomUUID()
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
      console.log('Fazendo login em:', `${apiUrl}/auth/login`);
      console.log('Dados:', { email: formData.email, deviceId: formData.deviceId });
      
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          senha: formData.senha,
          deviceId: formData.deviceId
        })
      });

      const data = await response.json();
      console.log('Resposta do servidor:', data);

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Erro ao fazer login');
      }

      console.log('Login bem-sucedido:', data);

      // Salvar token e dados do usuário
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('deviceId', data.deviceId || formData.deviceId);

      // Redirecionar para dashboard
      navigate('/');
    } catch (err) {
      console.error('Erro no login:', err);
      setError(err.message || 'Erro ao fazer login. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: 4 }}>
          OnMotor
        </Typography>
        <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
          Login
        </Typography>
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.senha}
              onChange={handleChange}
              disabled={loading}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;
