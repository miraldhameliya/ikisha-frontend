# API Integration Documentation

## Overview
This document describes the API integration setup for the Ikisha Frontend application.

## Security Approach
**User data is kept private and not stored in localStorage.** Only the authentication token is stored locally, and user data is fetched from the server when needed.

## File Structure

```
src/
├── api/
│   ├── baseUrl.js          # Base URL configuration
│   ├── constApi.js         # API endpoint constants
│   ├── axiosApi.js         # Axios instance with interceptors
│   └── services/
│       └── authService.js  # Authentication API services
├── utils/
│   └── auth.js            # Authentication utility functions
├── hooks/
│   └── useAuth.js         # Custom authentication hook
└── components/
    └── auth/
        ├── ProtectedRoute.jsx  # Route protection for authenticated users
        └── PublicRoute.jsx     # Route protection for public pages
```

## API Configuration

### Base URL
- **File**: `src/api/baseUrl.js`
- **URL**: `https://api.ikishanxt.com`

### Axios Instance
- **File**: `src/api/axiosApi.js`
- **Features**:
  - Automatic token injection in headers
  - 401 error handling with automatic logout
  - Request/response interceptors

## Authentication Flow

### Login Process
1. User enters email and password
2. Form validation
3. API call to `/admin/profile/login`
4. Store **only token** in localStorage (user data remains private)
5. Redirect to dashboard

### User Data Fetching
1. When component needs user data, `useAuth` hook fetches from `/admin/profile`
2. User data is stored in component state (not localStorage)
3. If profile fetch fails, user is automatically logged out

### Logout Process
1. Call logout API
2. Clear token from localStorage
3. Clear user data from component state
4. Redirect to login page

### Route Protection
- **Protected Routes**: Dashboard pages require authentication
- **Public Routes**: Login/Register pages redirect authenticated users

## API Endpoints

### Authentication
- `POST /admin/profile/login` - User login
- `GET /admin/profile` - Get user profile data
- `POST /admin/profile/forgot-password` - Forgot password
- `POST /admin/profile/reset-password` - Reset password
- `POST /admin/profile/logout` - User logout

### Profile
- `PUT /admin/profile/update` - Update user profile

## Usage Examples

### Login API Call
```javascript
import { LoginApi } from '../api/services/authService';

const handleLogin = async (formData) => {
  try {
    const response = await LoginApi(formData);
    if (response.data.IsSuccess) {
      // Only token is stored, user data remains private
      localStorage.setItem('token', response.data.Data.token);
    }
  } catch (error) {
    // Handle error
  }
};
```

### Using User Data in Components
```javascript
import { useAuth } from '../hooks/useAuth';

function MyComponent() {
  const { user, loading, isAuthenticated } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return <div>Please login</div>;
  
  return <div>Welcome, {user?.username}</div>;
}
```

### Protected Route Usage
```javascript
import ProtectedRoute from '../components/auth/ProtectedRoute';

<ProtectedRoute>
  <DashboardComponent />
</ProtectedRoute>
```

## Security Features

1. **Token Storage**: Only JWT tokens stored in localStorage
2. **User Data Privacy**: User data never stored locally, always fetched from server
3. **Automatic Token Injection**: All API calls include Authorization header
4. **Route Protection**: Unauthorized access prevention
5. **Automatic Logout**: On 401 errors or profile fetch failures
6. **Secure Data Handling**: Sensitive user information stays on server

## Error Handling

### API Errors
- 401: Automatic logout and redirect to login
- Profile fetch failure: Automatic logout
- Other errors: Display error message to user

### Network Errors
- Connection issues: Show appropriate error message
- Timeout: Retry mechanism (can be implemented)

## Testing

### Test Credentials
- **Email**: krishpavasiya41@gmail.com
- **Password**: krish@1234

### API Response Format
```json
{
  "Message": "Login successfully!",
  "Data": {
    "_id": "66c76cf1bdf3920f8cf29b2f",
    "email": "krishpavasiya41@gmail.com",
    "username": "kp42",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "Status": 200,
  "IsSuccess": true
}
```

## Benefits of This Approach

1. **Enhanced Security**: User data never exposed in browser storage
2. **Data Freshness**: Always get latest user data from server
3. **Privacy Compliance**: Meets strict privacy requirements
4. **Reduced Storage**: Minimal local storage usage
5. **Automatic Sync**: User data stays in sync with server

## Future Enhancements

1. **Token Refresh**: Implement automatic token refresh
2. **Remember Me**: Enhanced remember me functionality
3. **Session Management**: Better session handling
4. **Error Logging**: Centralized error logging
5. **API Caching**: Implement response caching (for non-sensitive data) 