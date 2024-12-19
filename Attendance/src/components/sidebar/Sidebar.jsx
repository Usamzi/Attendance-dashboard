import React from 'react';
import { AiFillDashboard } from "react-icons/ai";
import { FaSchool } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { PiStudentDuotone } from "react-icons/pi";
import { HiBanknotes } from "react-icons/hi2";
import { TbSection } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { SiWebmoney } from "react-icons/si";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=' h-screen bg-black dark:bg-slate-950/50  shadow-lg '>
      <div className=' flex flex-col gap-3 w-full text-slate-300 h-full justify-between'>
        <div className='flex flex-col gap-10 px-4  mt-4'>
          <div className='flex  gap-2'>
            <SiWebmoney className='text-indigo-900 dark:text-white '/>
            <div className=' hidden md:flex font-bold '>AttendanceApp</div>
          </div>
          <div className='flex flex-col gap-5 text-md sm:text-xs md:text-sm lg:text-lg '>
            <Link to='/'>
            <div className='flex items-center  gap-2'>
              <div><AiFillDashboard/></div>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer '>Dashboard</div>
            </div>
            </Link>
            <Link to='/schools'>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><FaSchool /></div>
              <div className='hidden sm:flex'>Schools</div>
            </div>
            </Link>
            <Link to='/classes'>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><SiGoogleclassroom /></div>
              <div className='hidden sm:flex'>Classes</div>
            </div>
            </Link>
            <Link to='/Student'>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><PiStudentDuotone /></div>
              <div className='hidden sm:flex'>Student</div>
            </div>
            </Link> 
            <Link to='/session' >
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><TbSection /></div>
              <div className='hidden sm:flex'>Session</div>
            </div>
            </Link>
            <Link to='/Payments'>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><HiBanknotes/></div>
              <div className='hidden sm:flex'>Payments</div>
            </div>
            </Link>
          </div>
        </div>
        <div className='flex items-center text-md sm:text-xs md:text-sm lg:text-lg px-4 mb-4 gap-2 hover:text-slate-100 cursor-pointer'>
          <div><IoSettingsOutline/></div>
          <div className='hidden sm:flex'>Settings</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
