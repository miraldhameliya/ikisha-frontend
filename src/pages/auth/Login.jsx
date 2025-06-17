
import React, { useState } from 'react';
import loginvactor from '../../assets/icon/loginvactor.png';
import BackgroundDesign from '../../assets/icon/BackgroundDesign.png';
import Rounded from '../../assets/icon/Rounded.png';
import Vector from '../../assets/icon/Vector.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', formData, 'Remember me:', rememberMe);
    navigate('/category');
  };

  return (
    <div
      className="bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${BackgroundDesign})` // fixed this line
      }}
    >
      <div className="flex w-full h-screen 2xl:mx-32 mx-20 gap-10">
        {/* Left: Login Form */}
        <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-start xl:mx-20">
          <div className="bg-white p-10 rounded-2xl shadow-2xl lg:w-[26rem] w-96">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
              Welcome Back!
            </h1>
            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">👁️</span>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between mb-6 text-sm">
                <label className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2 h-4 w-4 text-green-600"
                  />
                  Remember me
                </label>
                <Link to="/forgot-password" className="text-green-700 hover:underline font-semibold">
                  Forgot Password?
                </Link>

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 transition duration-200 font-semibold"
                onClick={handleSubmit}
              >
                Log In
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex w-[500px] bg-[#eef1eb] rounded-t-[300px] flex-col items-center lg:mt-16 md:mt-14 relative overflow-hidden 2xl:ml-28
  md:hidden
  sm:flex
  lg:flex">
          {/* Logo */}
          <div className='md:mt-20 lg:mt-28 flex items-center justify-center'>
            <img
              src={Vector}
              alt="Logo"
              className="lg:w-96 md: mb-10 h-auto"
            />
          </div>
          {/* Centered Login Illustration */}
          <div className="flex items-center justify-center">
            <img
              src={loginvactor}
              alt="Login Illustration"
              className="h-auto w-96 mt-20 object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
