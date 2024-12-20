import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SectionForm = () => {
  const [sectionName, setSectionName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [className, setClassName] = useState('');
  const [studentName, setStudentName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSection = { sectionName, schoolName, className, studentName };
   console.log("new Section is this",newSection);
    navigate('/section'); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-6xl mx-auto bg-white p-5 shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">Add New Session</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="sectionName" className="block text-gray-700">Section Name</label>
            <input
              type="text"
              id="sectionName"
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
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
            <label htmlFor="studentName" className="block text-gray-700">Student Name</label>
            <input
              type="text"
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-md"
              onClick={() => navigate('/section')}
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

export default SectionForm;
