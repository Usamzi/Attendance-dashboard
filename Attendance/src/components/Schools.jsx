import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSchools } from "../api/school/schoolAuth";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { GoPencil } from "react-icons/go";

export const Schools = () => {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        setLoading(true);
        const response = await getSchools();
        setSchools(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching schools:", err);
        setError("Failed to fetch schools.");
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-5">Loading schools...</div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-5">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

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

      <div className="w-full bg-white p-5 shadow-md rounded-md">
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
              <th className="border border-gray-300 px-4 py-2 text-left">
                School Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Phone Number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Subscription
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Location
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Permission
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  {school.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {school.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {school.phoneNumber}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {school.SubScription ? "True" : "false"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {school.location}
                </td>
                <td className="border border-gray-300 px-4 py-2">data</td>
                <td className="border border-gray-300 px-4 ">
                  <div className="flex items-center justify-center gap-2">
                    <GoPencil
                      size={25}
                      className="text-red-500 hover:text-[#e3ce27] cursor-pointer"
                    />
                    <MdDelete
                      size={25}
                      className="text-red-500 hover:text-[#e3ce27] cursor-pointer"
                    />
                    <IoEyeSharp
                      size={25}
                      className="text-gray-500 hover:text-[#e3ce27] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
