import React, { useState } from 'react'
import Vector from '../../assets/Vector.png'
import loginvactor from '../../assets/loginvactor.png'
import BackgroundDesign from '../../assets/BackgroundDesign.png'
import rounded from '../../assets/Rounded.png'

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [rememberMe, setRememberMe] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement login logic
    console.log('Login attempt with:', formData, 'Remember me:', rememberMe)
  }

  return (
    <div className='flex items-center justify-center bg-white'>
      {/* Left Section */}
      <div className='flex items-center justify-center bg-white relative'>
        {/* Background lines */}
        <img src={BackgroundDesign} alt="Background Design" className="object-cover w-screen h-screen opacity-100 flex items-center justify-center" />
        <div className="absolute min-h-screen flex items-center justify-center mr-[45rem]">
          <div className="w-96 bg-white p-6 rounded-lg shadow-2xl">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h1>

            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                    👁️
                  </span>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between mb-6 text-sm">
                <label className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    className="h-4 w-4 text-green-600 mr-2"
                  />
                  Remember me
                </label>
                <a href="#" className="text-green-700 hover:underline">
                  Forget Password?
                </a>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 transition duration-200 font-semibold"
              >
                Log In
              </button>
            </form>
          </div>
        </div>



      </div>

      {/* Right Section */}

      <div className='hidden md:flex items-center justify-center absolute ml-[55rem] h-[55rem] min-h-screen w-[32rem] '>
        <img src={rounded} alt="Rounded Design" className="absolute top-18 h-[55rem] opacity-[40px]" />
        <div className='relative flex flex-col items-center justify-center h-[55rem] w-[30rem]'>
          <img src={Vector} alt="Vector Design" className="absolute top-40 w-78 h-auto" />
          <img src={loginvactor} alt="Login Vector" className="absolute h-auto z-10 mt-96" />
        </div>


      </div>


    </div>
  )
}

export default Login
