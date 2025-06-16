import React, { useState } from 'react';
import BackgroundDesign from '../../assets/BackgroundDesign.png';
import rounded from '../../assets/rounded.png';
import Vector from '../../assets/Vector.png';
import forgotImage from '../../assets/forgotImage.png';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      // TODO: Add your API call here
      // const response = await forgotPasswordAPI(email);
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess('Verification code has been sent to your email');
      setEmail('');
    } catch (err) {
      setError('Failed to send verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background Image */}
      <img
        src={BackgroundDesign}
        alt="Background Design"
        className="absolute w-full h-full object-cover opacity-100"
      />

      {/* Main Content */}
      <div className="relative z-10 flex w-full h-full px-[7.5rem]">
        {/* Left Section - Form */}
        <div className="flex items-center justify-center">
          <div className="w-96 bg-white p-8 rounded-lg shadow-2xl">
            <h1 className="text-3xl font-bold text-center text-[#334155] mb-6">Forget Password</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className={`w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-green-600`}
                  required
                />
                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                {success && <p className="mt-2 text-sm text-green-500">{success}</p>}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full mt-8 bg-[#303F26] text-white py-2 rounded-md hover:bg-[#1f291d] transition duration-200 font-semibold ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Sending...' : 'Get Verification Code'}
              </button>
            </form>
          </div>
        </div>

        {/* Right Section - Design */}
        <div className='hidden md:flex items-center justify-center absolute ml-[55rem] h-[55rem] min-h-screen w-[32rem] '>
          <img src={rounded} alt="Rounded Design" className="absolute top-18 h-[55rem] opacity-[40px]" />
          <div className='relative flex flex-col items-center justify-center h-[55rem] w-[30rem]'>
            <img src={Vector} alt="Vector Design" className="absolute top-40 w-78 h-auto" />
            <img src={forgotImage} alt="Login Vector" className="absolute h-auto z-10 mt-96" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
