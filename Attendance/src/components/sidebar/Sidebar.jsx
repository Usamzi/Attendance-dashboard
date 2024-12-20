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
import { useUser } from '../../utils/useUser';
import { use } from 'react';

const Sidebar = () => {
  const user=useUser();
  const userRole=user.role;
  return (
    <div className=' h-screen bg-secondary text-black   shadow-lg '>
      <div className=' flex flex-col gap-3 w-full text-slate-300 h-full justify-between'>
        <div className='flex flex-col   justify-center text-black gap-16   mt-4'>
          <div className='flex  gap-2 hover:text-primary justify-center items-center p-4 border-b'>
            <SiWebmoney  />
            <div className=' hidden md:flex font-bold '>AttendanceApp</div>
          </div>
          <div className='flex flex-col  mx-auto w-[150px] gap-5 text-md sm:text-xs md:text-sm lg:text-lg '>
            <Link to='/'>
            <div className='flex items-center hover:text-primary   gap-2'>
              <div><AiFillDashboard/></div>
              <div className='hidden sm:flex cursor-pointer '>Dashboard</div>
            </div>
            </Link>
            <Link to='/schools'>
            <div className='flex items-center  gap-2 hover:text-primary cursor-pointer'>
              <div><FaSchool /></div>
              <div className='hidden sm:flex'>Schools</div>
            </div>
            </Link>
            <Link to='/classes'>
            <div className='flex items-center  gap-2 hover:text-primary cursor-pointer'>
              <div><SiGoogleclassroom /></div>
              <div className='hidden sm:flex'>Classes</div>
            </div>
            </Link>
            <Link to='/Student'>
            <div className='flex items-center  gap-2 hover:text-primary cursor-pointer'>
              <div><PiStudentDuotone /></div>
              <div className='hidden sm:flex'>Student</div>
            </div>
            </Link> 
            <Link to='/grades'>
            <div className='flex items-center  gap-2 hover:text-primary cursor-pointer'>
              <div><HiBanknotes/></div>
              <div className='hidden sm:flex'>Grades</div>
            </div>
            </Link>
            <Link to='/devices'>
            <div className='flex items-center  gap-2 hover:text-primary cursor-pointer'>
              <div><HiBanknotes/></div>
              <div className='hidden sm:flex'>Devices</div>
            </div>
            </Link>
            <Link to='/session' >
            <div className='flex items-center  gap-2 hover:text-primary cursor-pointer'>
              <div><TbSection /></div>
              <div className='hidden sm:flex'>Session</div>
            </div>
            </Link>
            {
              userRole === "school" ? "":
            <Link to='/Payments'>
            <div className='flex items-center  gap-2 hover:text-primary cursor-pointer'>
              <div><HiBanknotes/></div>
              <div className='hidden sm:flex'>Payments</div>
            </div>
            </Link>
            }
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
