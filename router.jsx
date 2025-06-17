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
export const router = [
    {
        path: "/category",
        name: "category",
        element: Category
    },
    {
        path: "/product",
        name: "product",
        element: Product
    },
    {
        path: "/diamond",
        name: "diamond",
        element: Diamond
    },
    {
        path: "/diamond-clarity",
        name: "diamond-clarity",
        element: DiamondClarity
    },
    {
        path: "/metal",
        name: "metal",
        element: Metal
    },
   {
        path: "/size",
        name: "size",
        element: Size
    },
   
   
    {
        path: "/login",
        name: "login",
        element: Login
    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        element: ForgotPassword
    },
    {
        path: "/reset-password",
        name: "reset-password",
        element: Reset
    }
]