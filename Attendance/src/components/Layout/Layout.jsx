import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

const Layout = () => {
  return (
    <div  className='flex h-screen bg-white dark:bg-slate-900'>
         <section className='w-[10%] sm:w-[15%]'>
        <Sidebar/>
        </section>
        <section className='flex flex-col w-[90%] sm:w-[85%] overflow-auto'>
            <div>
               <Navbar />
            </div>
        <Outlet />
      </section>
    </div>
  )
}

export default Layout