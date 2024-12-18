import React from 'react';
import { useNavigate } from 'react-router-dom';

const Section = () => {
  const navigate = useNavigate();

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
          <h1 className="text-2xl font-bold text-gray-800">Session List</h1>
          <button
            onClick={() => navigate('/add-section')}
            className="px-4 py-2 bg-[#e3ce27] text-white rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            Add Section
          </button>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#e3ce27] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Section Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">School Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Class Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Student Name</th>
            </tr>
          </thead>
          <tbody>
           
            <tr className="odd:bg-white">
              <td className="border border-gray-300 px-4 py-2">Section A</td>
              <td className="border border-gray-300 px-4 py-2">School 1</td>
              <td className="border border-gray-300 px-4 py-2">Class 1</td>
              <td className="border border-gray-300 px-4 py-2">Student 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Section;
