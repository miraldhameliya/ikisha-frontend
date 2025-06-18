import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from './components/layout/DefaultLayout';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import Reset from './pages/auth/Reset';
import Category from './pages/dashboard/Category';
import Diamond from './pages/dashboard/Diamond';
import DiamondClarity from './pages/dashboard/DiamondClarity';
import Metal from './pages/dashboard/Metal';
import Size from './pages/dashboard/Size';
import { router } from '../router';

function App() {
  // You can add your authentication check logic here
  const isAuthenticated = localStorage.getItem('token'); // or your auth check logic

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />} />
          <Route path="/forgot-password" element={!isAuthenticated ? <ForgotPassword /> : <Navigate to="/" replace />} />
          <Route path="/reset-password" element={!isAuthenticated ? <Reset /> : <Navigate to="/" replace />} />

          {/* Protected Routes with DefaultLayout */}
          <Route element={isAuthenticated ? <DefaultLayout /> : <Navigate to="/login" replace />}>
            {router.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Route>

          {/* Catch all route - redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
