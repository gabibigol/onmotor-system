import React from 'react';
import { Box, Typography, AppBar, Toolbar, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Componente de layout principal
const MainLayout = () => {
  const navigate = useNavigate();
  const drawerWidth = 240;

  // Menu items
  const menuItems = [
    { text: 'Dashboard', path: '/' },
    { text: 'Serviços', path: '/servicos' },
    { text: 'Vendas', path: '/vendas' },
    { text: 'Clientes', path: '/clientes' },
    { text: 'Estoque', path: '/estoque' },
    { text: 'Fornecedores', path: '/fornecedores' },
    { text: 'RH', path: '/rh' },
    { text: 'Financeiro', path: '/financeiro' },
    { text: 'Fiscal', path: '/fiscal' },
    { text: 'Gerência', path: '/gerencia' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            OnMotor - Sistema de Gestão para Oficinas
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.text} 
                onClick={() => navigate(item.path)}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem button onClick={() => navigate('/profile')}>
              <ListItemText primary="Meu Perfil" />
            </ListItem>
            <ListItem button onClick={() => navigate('/devices')}>
              <ListItemText primary="Dispositivos" />
            </ListItem>
            <ListItem button onClick={() => navigate('/settings')}>
              <ListItemText primary="Configurações" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
