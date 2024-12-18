import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSchools } from '../api/school/schoolAuth';
import { getClasses } from '../api/classes/classAuth';
import Checkbox from "./Checkbox/Checkbox"; 
import { AiOutlineClose, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { createStudent } from '../api/students/studentAuth';

const StudentForm = () => {
  const [studentName, setStudentName] = useState('');
  const [age, setAge] = useState(''); 
  const [selectedClasses, setSelectedClasses] = useState([]); 
  const [selectedSchools, setSelectedSchools] = useState([]); 
  const [schoolOptions, setSchoolOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]); 
  const [dropdownOpen, setDropdownOpen] = useState(''); 

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const data = await getSchools();
        setSchoolOptions(data.data); 
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    const fetchClasses = async () => {
      try {
        const data = await getClasses();
        setClassOptions(data.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchSchools();
    fetchClasses();
  }, []);

  const handleSchoolSelect = (school) => {
    setSelectedSchools((prevSelected) => 
      prevSelected._id === school._id ? null : school
    );
  };

  const handleClassSelect = (classItem) => {
    setSelectedClasses((prevSelected) => 
      prevSelected._id === classItem._id ? null : classItem
    );
  };

  const handleClearSelection = (e, type) => {
    e.stopPropagation();
    if (type === 'school') {
      setSelectedSchools(null); 
    } else if (type === 'class') {
      setSelectedClasses(null);
    }
  };

  const handleDropdownToggle = (type) => {
    setDropdownOpen((prev) => (prev === type ? '' : type));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStudent = {
      name: studentName,
      SchoolId: selectedSchools ? selectedSchools._id : null,
      classId: selectedClasses ? selectedClasses._id : null,
      age
    };

    try {
      const response = await createStudent(newStudent);
      console.log("Student created:", response.data);
      navigate('/student');
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-6xl mx-auto bg-white p-5 shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">Add New Student</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="studentName" className="block text-gray-700">
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="className" className="block text-gray-700">
              Class Name
            </label>
            <div
              className="w-full flex items-center px-4 py-2 border border-gray-300 rounded cursor-pointer relative"
              onClick={() => handleDropdownToggle('class')}
            >
              <span className="flex-1">
                {selectedClasses ? selectedClasses.name : "Select a class"}
              </span>
              {selectedClasses && (
                <AiOutlineClose
                  className="text-red-500 hover:text-red-700 cursor-pointer mr-2"
                  onClick={(e) => handleClearSelection(e, 'class')}
                />
              )}
              {dropdownOpen === 'class' ? (
                <AiOutlineUp className="text-gray-500" />
              ) : (
                <AiOutlineDown className="text-gray-500" />
              )}
            </div>
            {dropdownOpen === 'class' && (
              <div className="absolute bg-white border border-gray-300 rounded mt-1 max-h-40 overflow-y-auto w-full z-10">
                {classOptions.map((classItem) => (
                  <div
                    key={classItem._id}
                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleClassSelect(classItem)}
                  >
                    <Checkbox
                      checked={selectedClasses && selectedClasses._id === classItem._id}
                      onChange={() => handleClassSelect(classItem)} // Pass `handleClassSelect` directly to the Checkbox component
                    />
                    <span className="ml-2">{classItem.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">School Name</label>
            <div
              className="w-full flex items-center px-4 py-2 border border-gray-300 rounded cursor-pointer relative"
              onClick={() => handleDropdownToggle('school')}
            >
              <span className="flex-1">
                {selectedSchools ? selectedSchools.name : "Select a school"}
              </span>
              {selectedSchools && (
                <AiOutlineClose
                  className="text-red-500 hover:text-red-700 cursor-pointer mr-2"
                  onClick={(e) => handleClearSelection(e, 'school')}
                />
              )}
              {dropdownOpen === 'school' ? (
                <AiOutlineUp className="text-gray-500" />
              ) : (
                <AiOutlineDown className="text-gray-500" />
              )}
            </div>
            {dropdownOpen === 'school' && (
              <div className="absolute bg-white border border-gray-300 rounded mt-1 max-h-40 overflow-y-auto w-full z-10">
                {schoolOptions.map((school) => (
                  <div
                    key={school._id}
                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSchoolSelect(school)}
                  >
                    <Checkbox
                      checked={selectedSchools && selectedSchools._id === school._id}
                      onChange={() => handleSchoolSelect(school)} 
                    />
                    <span className="ml-2">{school.name}</span>
                  </div>
                ))}
              </div>
            )}
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

export default StudentForm;
