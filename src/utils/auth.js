// Check if user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

// Get access token
export const getAccessToken = () => {
  return localStorage.getItem('token');
};

// Clear authentication data
export const clearAuth = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('rememberMe');
};

// Check if remember me is enabled
export const isRememberMeEnabled = () => {
  return localStorage.getItem('rememberMe') === 'true';
}; 