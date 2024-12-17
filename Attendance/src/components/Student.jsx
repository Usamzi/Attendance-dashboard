import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Students = () => {
    const [students, setStudents] = useState([
        { studentName: 'John Doe', className: 'Class 1', schoolName: 'Greenwood High' },
        { studentName: 'Jane Smith', className: 'Class 2', schoolName: 'Riverdale School' },
        { studentName: 'Sam Wilson', className: 'Class 3', schoolName: 'Sunrise Academy' },
        { studentName: 'Sara Lee', className: 'Class 4', schoolName: 'Harmony School' },
        { studentName: 'Tommy Johnson', className: 'Class 5', schoolName: 'Maple Leaf High' },
      ]);
      
      const navigate = useNavigate();

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
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
    <th className="border border-gray-300 px-4 py-2 text-left">Student Name</th>
    <th className="border border-gray-300 px-4 py-2 text-left">Class Name</th>
    <th className="border border-gray-300 px-4 py-2 text-left">School Name</th>
  </tr>
</thead>

<tbody>
  {students.map((student, index) => (
    <tr key={index} className="odd:bg-white">
      <td className="border border-gray-300 px-4 py-2">{student.studentName}</td>
      <td className="border border-gray-300 px-4 py-2">{student.className}</td>
      <td className="border border-gray-300 px-4 py-2">{student.schoolName}</td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default Students;
