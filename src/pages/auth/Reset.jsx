import React, { useState } from 'react'
import BackgroundDesign from '../../assets/BackgroundDesign.png'
import rounded from '../../assets/Rounded.png'
import Vector from '../../assets/Vector.png'
import reset from '../../assets/reset.png'
import { useNavigate } from 'react-router-dom'

function Reset() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validate passwords match
        if (formData.newPassword !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Validate password strength (minimum 8 characters, at least one number and one letter)
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(formData.newPassword)) {
            setError('Password must be at least 8 characters long and contain at least one letter and one number');
            return;
        }

        try {
            // Here you would typically make an API call to reset the password
            // For example:
            // await resetPassword(formData.newPassword);
            
            // After successful password reset
            navigate('/login'); // Redirect to login page
        } catch (err) {
            setError('Failed to reset password. Please try again.');
        }
    };

    return (
        <div className='flex items-center justify-center bg-white'>
            <div className='flex items-center justify-center bg-white relative'>
                <img src={BackgroundDesign} alt="Background Design" className="object-cover w-screen h-screen opacity-100 flex items-center justify-center" />

                <div className="absolute min-h-screen flex items-center justify-center mr-[45rem]">
                    <div className="w-96 bg-white p-6 rounded-lg shadow-2xl">
                        <h1 className="text-3xl font-bold text-center text-[#334155] mb-6">Reset password</h1>
                        {error && (
                            <div className="mb-4 p-2 text-sm text-red-600 bg-red-100 rounded-md">
                                {error}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            {/* New Password */}
                            <div className="mb-4">
                                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                    placeholder="Enter your new password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                    required
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm your new password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-8 bg-[#303F26] text-white py-2 rounded-md hover:bg-[#1f291d] transition duration-200 font-semibold"
                            >
                                Reset Password
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
                    <img src={reset} alt="Login Vector" className="absolute h-auto z-10 mt-96" />
                </div>
            </div>
        </div>
    )
}

export default Reset
