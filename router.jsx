import React from 'react'

const Login = React.lazy(() => import("./src/pages/auth/Login"))
const ForgotPassword = React.lazy(() => import("./src/pages/auth/ForgotPassword"))
const Reset = React.lazy(() => import("./src/pages/auth/Reset"))

export const router = [

    {
        path: "/login",
        name: "Login",
        element: Login
    },
    {
        path: "/forgot-password",
        name: "Forgot Password",
        element: ForgotPassword
    },
    {
        path: "/reset-password",
        name: "Reset Password",
        element: Reset
    }
]