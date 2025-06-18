import { LOGIN, FORGOT_PASSWORD, RESET_PASSWORD } from "../constApi";
import { apiInstance } from "../axiosApi";

// Login API
export const LoginApi = (payload) => {
    return apiInstance.post(LOGIN, payload);
};


// Forgot Password API
export const ForgotPasswordApi = (payload) => {
    return apiInstance.post(FORGOT_PASSWORD, payload);
};

// Reset Password API
export const ResetPasswordApi = (payload) => {
    return apiInstance.post(RESET_PASSWORD, payload);
};
