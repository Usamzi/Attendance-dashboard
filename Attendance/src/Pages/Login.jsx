import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { logInUser } from '../api/auth/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await logInUser(values); 
        if (response?.status === 200) {
          toast.success('Login successful!');
          navigate('/'); 
        } else {
          console.error('Unexpected response:', response.response.data.error);
          toast.error(response.response.data.error || 'An error occurred. Please try again.');
        }
      } catch (err) { 
        toast.error(err.response?.response?.data?.error || 'Login failed. Please try again.');
      } finally {
        setLoading(false); 
      }
    },
  });
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-[500px] p-5 bg-white shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-5 text-[#e3ce27]">Login</h2>
        <form id="loginForm" onSubmit={formik.handleSubmit}>
          <label htmlFor="email" className="block font-bold text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className={`w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring-2 ${
              formik.errors.email && formik.touched.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-[#e3ce27]'
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mb-4">{formik.errors.email}</div>
          )}

          <label htmlFor="password" className="block font-bold text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className={`w-full px-3 py-2 mb-2 border rounded focus:outline-none focus:ring-2 ${
              formik.errors.password && formik.touched.password
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-[#e3ce27]'
            }`}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm mb-4">{formik.errors.password}</div>
          )}

          <button
            type="submit"
            className="w-full px-3 py-2 bg-[#e3ce27] text-white rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-[#e3ce27]"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
