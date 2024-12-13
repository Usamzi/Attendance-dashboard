import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Main from './main/Main'
import Login from '../Pages/Login'
import { Schools } from './Schools'

const ProtectedRoutes = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/schools" element={<Schools />} />
        </Route>
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default ProtectedRoutes