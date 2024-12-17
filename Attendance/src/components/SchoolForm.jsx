import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SchoolForm = ({ addSchool }) => {
  const [schoolData, setSchoolData] = useState({
    name: "",
    email: "",
    phone: "",
    subscription: "",
    location: "",
  });

  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSchoolData({ ...schoolData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("school is this",schoolData);
    navigate("/Schools"); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-6xl mx-auto bg-white p-5 shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">Add New School</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">School Name</label>
            <input
              type="text"
              name="name"
              value={schoolData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={schoolData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={schoolData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Subscription</label>
            <input
              type="text"
              name="subscription"
              value={schoolData.subscription}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={schoolData.location}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
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

export default SchoolForm;
