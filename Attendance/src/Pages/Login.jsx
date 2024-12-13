import React from 'react'

export const Login = () => {
    const handleSubmit = () => {

    }
  return (
    <>
     <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-[500px] p-5 bg-white shadow-md rounded-lg ">
        <h2 className="text-center text-2xl font-bold mb-5 text-[#e3ce27] ">Login</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="username" className="block font-bold text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            id="username"
            placeholder="Enter your email"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#e3ce27]"
            required
          />

          <label htmlFor="password" className="block font-bold text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#e3ce27]"
            required
          />

       

          <button
            type="submit"
            className="w-full px-3 py-2 bg-[#e3ce27] text-white rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-[#e3ce27]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login;