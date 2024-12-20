import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getStudents } from "../api/students/studentAuth";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { GoPencil } from "react-icons/go";

const Students = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

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
          <h1 className="text-2xl font-bold text-gray-800">Students List</h1>
          <Link
            to="/add-student"
            className="px-4 py-2 bg-[#e3ce27] text-white rounded hover:bg-yellow-500"
          >
            Add Student
          </Link>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#e3ce27] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Student Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Student Age
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                School Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Class Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="odd:bg-white">
                <td className="border border-gray-300 px-4 py-2">
                  {student.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.age}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.schoolId.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.classId.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
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

export default Students;
