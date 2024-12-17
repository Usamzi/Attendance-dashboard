import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Schools = () => {
  const [schools, setSchools] = useState([
    {
      name: "School 1",
      email: "school1@example.com",
      phone: "123456789",
      subscription: "1 Year",
      location: "Abc Street",
      isAllowed: false, 
    },
  ]);

  const navigate = useNavigate();

 
  const togglePermission = (index) => {
    const updatedSchools = [...schools];
    updatedSchools[index].isAllowed = !updatedSchools[index].isAllowed;
    setSchools(updatedSchools);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
     
      <div className="mb-5">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-[#e3ce27] text-white rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          Back
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-white p-5 shadow-md rounded-md">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold text-gray-800">School List</h1>
          <Link
            to="/add-school"
            className="px-4 py-2 bg-[#e3ce27] text-white rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            Add School
          </Link>
        </div>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#e3ce27] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">School Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Phone Number</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Subscription</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Permission</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{school.name}</td>
                <td className="border border-gray-300 px-4 py-2">{school.email}</td>
                <td className="border border-gray-300 px-4 py-2">{school.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{school.subscription}</td>
                <td className="border border-gray-300 px-4 py-2">{school.location}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={school.isAllowed}
                      onChange={() => togglePermission(index)}
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                     peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5
                     after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {school.isAllowed ? "Yes" : "No"}
                    </span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
