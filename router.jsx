import React from 'react'

const Login = React.lazy(() => import("./src/pages/auth/Login"))
const ForgotPassword = React.lazy(() => import("./src/pages/auth/ForgotPassword"))
const Reset = React.lazy(() => import("./src/pages/auth/Reset"))
const Category = React.lazy(() => import("./src/pages/dashboard/Category"))

export const router = [
    {
        path: "/",
        name: "category",
        element: Category
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