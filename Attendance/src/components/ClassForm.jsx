import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSchools } from "../api/school/schoolAuth";
import { createClass } from "../api/classes/classAuth";
import Checkbox from "./Checkbox/Checkbox"; 
import { AiOutlineClose, AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const ClassForm = () => {
  const [className, setClassName] = useState("");
  const [selectedSchools, setSelectedSchools] = useState([]); 
  const [schoolOptions, setSchoolOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const schools = await getSchools();
        setSchoolOptions(schools.data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };

    fetchSchools();
  }, []);

  const handleSchoolSelect = (school) => {
    setSelectedSchools((prev) => {
      if (prev.some((item) => item._id === school._id)) {
        return prev.filter((item) => item._id !== school._id);
      } else {
        return [school];
      }
    });
  };

  const handleClearSelection = (e) => {
    e.stopPropagation();
    setSelectedSchools([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newClass = {
      name:className,
      SchoolId: selectedSchools.length > 0 ? selectedSchools[0]._id : null, 
    };

    try {
      const response = await createClass(newClass);
      console.log("Class created successfully:", response);
      navigate("/classes");
    } catch (error) {
      console.error("Error creating class:", error);
      alert("Failed to create class. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-6xl mx-auto bg-white p-5 shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">Add New Class</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="className" className="block text-gray-700">
              Class Name
            </label>
            <input
              type="text"
              id="className"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">School Name</label>
            <div
              className="w-full flex items-center px-4 py-2 border border-gray-300 rounded cursor-pointer relative"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="flex-1">
                {selectedSchools.length > 0 ? selectedSchools.map(school => school.name).join(', ') : "Select schools"}
              </span>
              {selectedSchools.length > 0 && (
                <AiOutlineClose
                  className="text-red-500 hover:text-red-700 cursor-pointer mr-2"
                  onClick={handleClearSelection}
                />
              )}
              {dropdownOpen ? (
                <AiOutlineUp className="text-gray-500" />
              ) : (
                <AiOutlineDown className="text-gray-500" />
              )}
            </div>
            {dropdownOpen && (
              <div className="absolute bg-white border border-gray-300 rounded mt-1 max-h-40 overflow-y-auto w-full z-10">
                {schoolOptions.map((school) => (
                  <div
                    key={school.id}
                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSchoolSelect(school)}
                  >
                    <Checkbox
                      checked={selectedSchools.some((item) => item._id === school._id)}
                      onClick={() => handleSchoolSelect(school)}
                      readOnly
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

export default ClassForm;
