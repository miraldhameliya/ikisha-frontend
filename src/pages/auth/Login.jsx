// // import React, { useState } from 'react'
// // import Vector from '../../assets/Vector.png'
// // import loginvactor from '../../assets/loginvactor.png'
// // import BackgroundDesign from '../../assets/BackgroundDesign.png'
// // import rounded from '../../assets/Rounded.png'

// // function Login() {
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     password: ''
// //   })
// //   const [rememberMe, setRememberMe] = useState(false)

// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value
// //     }))
// //   }

// //   const handleRememberMeChange = (e) => {
// //     setRememberMe(e.target.checked)
// //   }

// //   const handleSubmit = (e) => {
// //     e.preventDefault()
// //     // TODO: Implement login logic
// //     console.log('Login attempt with:', formData, 'Remember me:', rememberMe)
// //   }

// //   return (
// //     // <div
// //     //   className="min-h-screen flex items-center justify-center bg-white bg-no-repeat bg-cover bg-left"
// //     //   style={{ backgroundImage: `url(${BackgroundDesign})` }}
// //     // >
// //     //   {/* Left Section */}
// //     //   <div className='flex justify-between items-center flex-row '>


// //     //     <div className='flex items-center justify-center bg-white relative ABC'>
// //     //       <div className=" flex items-center justify-center ">
// //     //         <div className="w-96 bg-white p-8 rounded-lg shadow-2xl">
// //     //           <h1 className="text-4xl font-bold text-center text-gray-800 mb-14">Welcome Back!</h1>

// //     //           <form onSubmit={handleSubmit}>
// //     //             {/* Username */}
// //     //             <div className="mb-4">
// //     //               <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
// //     //                 Username
// //     //               </label>
// //     //               <input
// //     //                 type="text"
// //     //                 id="username"
// //     //                 name="username"
// //     //                 value={formData.username}
// //     //                 onChange={handleChange}
// //     //                 placeholder="Enter your username"
// //     //                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
// //     //                 required
// //     //               />
// //     //             </div>

// //     //             {/* Password */}
// //     //             <div className="mb-4">
// //     //               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
// //     //                 Password
// //     //               </label>
// //     //               <div className="relative">
// //     //                 <input
// //     //                   type="password"
// //     //                   id="password"
// //     //                   name="password"
// //     //                   value={formData.password}
// //     //                   onChange={handleChange}
// //     //                   placeholder="Enter your password"
// //     //                   className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
// //     //                   required
// //     //                 />
// //     //                 <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
// //     //                   👁️
// //     //                 </span>
// //     //               </div>
// //     //             </div>

// //     //             {/* Remember & Forgot */}
// //     //             <div className="flex items-center justify-between mb-10 text-sm">
// //     //               <label className="flex items-center text-gray-700">
// //     //                 <input
// //     //                   type="checkbox"
// //     //                   checked={rememberMe}
// //     //                   onChange={handleRememberMeChange}
// //     //                   className="h-4 w-4 text-green-600 mr-2"
// //     //                 />
// //     //                 Remember me
// //     //               </label>
// //     //               <a href="#" className="text-green-700 hover:underline">
// //     //                 Forget Password?
// //     //               </a>
// //     //             </div>

// //     //             {/* Button */}
// //     //             <button
// //     //               type="submit"
// //     //               className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 transition duration-200 font-semibold"
// //     //             >
// //     //               Log In
// //     //             </button>
// //     //           </form>
// //     //         </div>
// //     //       </div>
// //     //     </div>

// //     //     {/* Right Section */}

// //     //     <div className='flex items-center justify-center  h-screen XYZ '>
// //     //       <img src={rounded} alt="Rounded Design" className="  " />
// //     //     </div>
// //     //   </div>

// //     // </div>

// //     <div
// //   className="min-h-screen w-full bg-no-repeat bg-cover bg-center flex items-center justify-center"
// //   style={{ backgroundImage: `url(${BackgroundDesign})` }}
// // >
// //   {/* Overlay Wrapper */}
// //   <div className="flex w-full h-screen">

// //     {/* Left Section (Login Form) */}
// //     <div className="w-1/2 flex items-center justify-center bg-white bg-opacity-90 ABC">
// //       <div className="w-96 p-8 rounded-lg shadow-2xl">
// //         <h1 className="text-4xl font-bold text-center text-gray-800 mb-14">Welcome Back!</h1>

// //         <form onSubmit={handleSubmit}>
// //           {/* Username */}
// //           <div className="mb-4">
// //             <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
// //               Username
// //             </label>
// //             <input
// //               type="text"
// //               id="username"
// //               name="username"
// //               value={formData.username}
// //               onChange={handleChange}
// //               placeholder="Enter your username"
// //               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
// //               required
// //             />
// //           </div>

// //           {/* Password */}
// //           <div className="mb-4">
// //             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
// //               Password
// //             </label>
// //             <div className="relative">
// //               <input
// //                 type="password"
// //                 id="password"
// //                 name="password"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 placeholder="Enter your password"
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
// //                 required
// //               />
// //               <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
// //                 👁️
// //               </span>
// //             </div>
// //           </div>

// //           {/* Remember & Forgot */}
// //           <div className="flex items-center justify-between mb-10 text-sm">
// //             <label className="flex items-center text-gray-700">
// //               <input
// //                 type="checkbox"
// //                 checked={rememberMe}
// //                 onChange={handleRememberMeChange}
// //                 className="h-4 w-4 text-green-600 mr-2"
// //               />
// //               Remember me
// //             </label>
// //             <a href="#" className="text-green-700 hover:underline">
// //               Forget Password?
// //             </a>
// //           </div>

// //           {/* Button */}
// //           <button
// //             type="submit"
// //             className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 transition duration-200 font-semibold"
// //           >
// //             Log In
// //           </button>
// //         </form>
// //       </div>
// //     </div>

// //     {/* Right Section (Image) */}
// //     <div className="w-1/2 flex items-center justify-center XYZ">
// //       <img src={rounded} alt="Rounded Design" className="max-w-full h-auto" />
// //     </div>
// //   </div>
// // </div>

// //   )
// // }

// // export default Login


// import React, { useState } from 'react';
// import BackgroundDesign from '../../assets/BackgroundDesign.png';
// import RoundedImage from '../../assets/rounded.png'; // this is the full right-side rounded image with logo + illustration

// function Login() {
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData, rememberMe);
//   };

//   return (
//     <div
//       className="min-h-screen  bg-no-repeat bg-cover flex items-center justify-center"
//       style={{ backgroundImage: `url(${BackgroundDesign})` }}
//     >
//       <div className="flex w-full h-screen max-w-[1280px]">
//         {/* Left Side: Login Form */}
//         <div className="w-1/2 flex items-center justify-center">
//           <div className="bg-white p-10 rounded-2xl shadow-xl w-96">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
//               Welcome Back!
//             </h1>
//             <form onSubmit={handleSubmit}>
//               {/* Username */}
//               <div className="mb-4">
//                 <label className="text-sm text-gray-700 font-medium block mb-2">Username</label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
//                   placeholder="Enter your username"
//                   required
//                 />
//               </div>

//               {/* Password */}
//               <div className="mb-4">
//                 <label className="text-sm text-gray-700 font-medium block mb-2">Password</label>
//                 <div className="relative">
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
//                     placeholder="Enter your password"
//                     required
//                   />
//                   <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">👁️</span>
//                 </div>
//               </div>

//               {/* Remember + Forgot */}
//               <div className="flex justify-between items-center text-sm mb-6">
//                 <label className="flex items-center text-gray-700">
//                   <input
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     className="mr-2"
//                   />
//                   Remember me
//                 </label>
//                 <a href="#" className="text-green-700 hover:underline">
//                   Forget Password?
//                 </a>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="w-full bg-green-900 text-white py-2 rounded-md font-semibold hover:bg-green-800"
//               >
//                 Log In
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Right Side: Full Rounded Image */}
//         <div className=" h-full flex items-center justify-center">
//           <img
//             src={RoundedImage}
//             alt="Rounded Design with Logo"
//             className="object-contain h-full w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import BackgroundDesign from '../../assets/BackgroundDesign.png';
import RoundedImage from '../../assets/rounded.png';
import loginvactor from '../../assets/loginvactor.png'
import Vector from '../../assets/Vector.png'

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, rememberMe);
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
        <div className="w-1/2 flex items-center justify-start xl:mx-20">
          <div className="bg-white p-10 rounded-2xl shadow-2xl lg:w-[26rem] w-96">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
              Welcome Back!
            </h1>
            <form onSubmit={handleSubmit}>
              {/* Username */}
              <div className="mb-4">
                <label className="text-sm text-gray-700 font-semibold block mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-sm"
                  placeholder="Enter your username"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="text-sm text-gray-700 font-semibold block mb-2">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-sm"
                    placeholder="Enter your password"
                    required
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">👁️</span>
                </div>
              </div>

              {/* Remember Me + Forgot */}
              <div className="flex justify-between items-center text-sm mb-12">
                <label className="flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2"
                  />
                  Remember me
                </label>
                <a href="#" className="text-green-700 hover:underline font-semibold text-sm">
                  Forget Password?
                </a>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-green-900 text-white py-2 rounded-md font-semibold hover:bg-green-800"
              >
                Log In
              </button>
            </form>
          </div>
        </div>

        {/* Right: Rounded Image at End */}
        <div className="w-[500px] bg-[#eef1eb] rounded-t-[300px] flex flex-col items-center lg:mt-16 md:mt-14 relative overflow-hidden 2xl:ml-28">
          {/* Logo */}
          <div className='flex-1 flex items-center justify-center'>
            <img
              src={Vector} // replace with your logo image (e.g. ikisha)
              alt="Logo"
              className="w-96 mb-10"
            />
          </div>
          {/* Centered Login Illustration */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={loginvactor} // replace with your illustration image
              alt="Login Illustration"
              className="h-96 w-auto object-contain"
            />
          </div>
        </div>


      </div>
    </div >
  );
}

export default Login;
