import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Classes = () => {
  const [classes, setClasses] = useState([
    { className: "Class 1", schoolName: "School 1", totalStudents: 25 },
    { className: "Class 2", schoolName: "School 2", totalStudents: 30 },
    { className: "Class 3", schoolName: "School 3", totalStudents: 28 },
    { className: "Class 4", schoolName: "School 4", totalStudents: 26 },
    { className: "Class 5", schoolName: "School 5", totalStudents: 24 },
  ]);

  const navigate = useNavigate();

  const addClass = (newClass) => {
    setClasses([...classes, newClass]);
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
          <h1 className="text-2xl font-bold text-gray-800">Classes List</h1>
          <Link
            to="/add-class"
            className="px-4 py-2 bg-[#e3ce27] text-white rounded hover:bg-yellow-500"
          >
            Add Class
          </Link>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#e3ce27] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Class Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                School Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Total Students
              </th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem, index) => (
              <tr key={index} className="odd:bg-white">
                <td className="border border-gray-300 px-4 py-2">
                  {classItem.className}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {classItem.schoolName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {classItem.totalStudents}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
