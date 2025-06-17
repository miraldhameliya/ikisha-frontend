// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import './index.css'
// import Login from './pages/auth/Login'
// import ForgotPassword from './pages/auth/ForgotPassword'
// import Reset from './pages/auth/Reset'
// import Header from './components/dashboard/Header'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgotPassword" element={<ForgotPassword />} />
//         <Route path="/resetPassword" element={<Reset />} />

//         <Route path="/dashboard" element={<Header/>} />

//         {/* Redirect root to login */}
//         {/* <Route path="/" element={<Navigate to="/login" replace />} />
        
//         {/* Catch all route - redirect to login */}
//         {/* <Route path="*" element={<Navigate to="/login" replace />} /> */} */}
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
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
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<Reset />} />

          {/* Protected Routes with DefaultLayout */}
          <Route path="/" element={<DefaultLayout />}>
            {router.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Route>

          {/* New Route */}
          <Route path="/category" element={<Category />} />

          {/* Catch all route - redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
