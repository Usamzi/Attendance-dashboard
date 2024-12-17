import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClassForm = () => {
  const [className, setClassName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [totalStudents, setTotalStudents] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const newClass = {
      className,
      schoolName,
      totalStudents: parseInt(totalStudents),
    };

    console.log("new class is this",newClass)
    navigate('/classes');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-6xl mx-auto bg-white p-5 shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">Add New Class</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="className" className="block text-gray-700">Class Name</label>
            <input
              type="text"
              id="className"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="schoolName" className="block text-gray-700">School Name</label>
            <input
              type="text"
              id="schoolName"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="totalStudents" className="block text-gray-700">Total Students</label>
            <input
              type="number"
              id="totalStudents"
              value={totalStudents}
              onChange={(e) => setTotalStudents(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-md"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#e3ce27] text-white rounded-md hover:bg-yellow-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassForm;
