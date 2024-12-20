import React, { useState } from "react";
import { FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { logOutUser } from "../api/auth/auth"; 
import { toast } from "react-toastify"; 

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const url = location.pathname;
  const newUrl = url.replace("/", "");

  const handleLogout = async () => {
    try {
      const response = await logOutUser(); 
      if (response.status === 200) {
        toast.success("Logged out successfully!");
        localStorage.removeItem("token"); 
        navigate("/login"); 
      } else {
        toast.error(response.data?.message || "Logout failed");
      }
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <nav className="bg-gray-200 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">{newUrl}</h1>
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-600 text-xl cursor-pointer" />
        <FaEnvelope className="text-gray-600 text-xl cursor-pointer" />
        <FaBell className="text-gray-600 text-xl cursor-pointer" />
        <div className="relative">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
              <a
                href="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="/settings"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Settings
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
