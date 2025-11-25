import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Layouts
import MainLayout from './components/layout/MainLayout';

// Páginas públicas
import LoginPage from './pages/auth/LoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import RegisterDevicePage from './pages/auth/RegisterDevicePage';

// Páginas protegidas
import Dashboard from './pages/dashboard/Dashboard';
import DeviceManager from './pages/auth/DeviceManager';
import ClientesModule from './pages/clientes/ClientesModule';
import ServicosModule from './pages/servicos/ServicosModule';
import VendasModule from './pages/vendas/VendasModule';
import EstoqueModule from './pages/estoque/EstoqueModule';
import FornecedoresModule from './pages/fornecedores/FornecedoresModule';
import RHModule from './pages/rh/RHModule';
import FinanceiroModule from './pages/financeiro/FinanceiroModule';
import FiscalModule from './pages/fiscal/FiscalModule';
import GerenciaModule from './pages/gerencia/GerenciaModule';
import ProfilePage from './pages/profile/ProfilePage';
import SettingsPage from './pages/settings/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

// Componente para rotas protegidas
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  
  if (loading) {
    return <div>Carregando...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }
  
  return children;
};

const App = () => {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/auth/register-device" element={<RegisterDevicePage />} />
      
      {/* Rotas protegidas */}
      <Route path="/" element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }>
        <Route index element={<Dashboard />} />
        <Route path="gerencia/*" element={<GerenciaModule />} />
        <Route path="servicos/*" element={<ServicosModule />} />
        <Route path="vendas/*" element={<VendasModule />} />
        <Route path="clientes/*" element={<ClientesModule />} />
        <Route path="estoque/*" element={<EstoqueModule />} />
        <Route path="fornecedores/*" element={<FornecedoresModule />} />
        <Route path="rh/*" element={<RHModule />} />
        <Route path="financeiro/*" element={<FinanceiroModule />} />
        <Route path="fiscal/*" element={<FiscalModule />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="devices" element={<DeviceManager />} />
      </Route>
      
      {/* Rota 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
