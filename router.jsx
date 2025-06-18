import React from 'react'

const Login = React.lazy(() => import("./src/pages/auth/Login"))
const ForgotPassword = React.lazy(() => import("./src/pages/auth/ForgotPassword"))
const Reset = React.lazy(() => import("./src/pages/auth/Reset"))
const Category = React.lazy(() => import("./src/pages/dashboard/Category"))
const Product = React.lazy(() => import("./src/pages/dashboard/Product"))
const Diamond = React.lazy(() => import("./src/pages/dashboard/Diamond"))
const DiamondClarity = React.lazy(() => import("./src/pages/dashboard/DiamondClarity"))
const Metal = React.lazy(() => import("./src/pages/dashboard/Metal"))
const Size = React.lazy(() => import("./src/pages/dashboard/Size"))

// Import route protection components
const ProtectedRoute = React.lazy(() => import("./src/components/auth/ProtectedRoute"))
const PublicRoute = React.lazy(() => import("./src/components/auth/PublicRoute"))

// Wrapper components for route protection
const ProtectedCategory = () => (
  <ProtectedRoute>
    <Category />
  </ProtectedRoute>
)

const ProtectedProduct = () => (
  <ProtectedRoute>
    <Product />
  </ProtectedRoute>
)

const ProtectedDiamond = () => (
  <ProtectedRoute>
    <Diamond />
  </ProtectedRoute>
)

const ProtectedDiamondClarity = () => (
  <ProtectedRoute>
    <DiamondClarity />
  </ProtectedRoute>
)

const ProtectedMetal = () => (
  <ProtectedRoute>
    <Metal />
  </ProtectedRoute>
)

const ProtectedSize = () => (
  <ProtectedRoute>
    <Size />
  </ProtectedRoute>
)

const PublicLogin = () => (
  <PublicRoute>
    <Login />
  </PublicRoute>
)

const PublicForgotPassword = () => (
  <PublicRoute>
    <ForgotPassword />
  </PublicRoute>
)

const PublicReset = () => (
  <PublicRoute>
    <Reset />
  </PublicRoute>
)

export const router = [
    // {
    //     path: "/",
    //     name: "category",
    //     element: ProtectedCategory
    // },
    {
        path: "/",
        name: "category",
        element: ProtectedCategory
    }, 
    {
        path: "/product",
        name: "product",
        element: ProtectedProduct
    },
    {
        path: "/diamond",
        name: "diamond",
        element: ProtectedDiamond
    },
    {
        path: "/diamond-clarity",
        name: "diamond-clarity",
        element: ProtectedDiamondClarity
    },
    {
        path: "/metal",
        name: "metal",
        element: ProtectedMetal
    },
   {
        path: "/size",
        name: "size",
        element: ProtectedSize
    },
   
   
    {
        path: "/login",
        name: "login",
        element: PublicLogin
    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        element: PublicForgotPassword
    },
    {
        path: "/reset-password",
        name: "reset-password",
        element: PublicReset
    }
]