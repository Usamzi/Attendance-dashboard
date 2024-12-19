import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getClasses } from "../api/classes/classAuth";
import { getSchools } from "../api/school/schoolAuth";
import Checkbox from "./checkbox/Checkbox";
import { AiOutlineClose, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { createSession } from "../api/sessionTime/sessionAuth";

const SectionForm = () => {
  const [sessionName, setSessionName] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [schools, setSchools] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [repeatSession, setRepeatSession] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchools = async () => {
      const response = await getSchools();
      setSchools(response.data);
    };

    const fetchClasses = async () => {
      const response = await getClasses();
      setClasses(response.data);
    };

    fetchSchools();
    fetchClasses();
  }, []);

  const convertTo12HourFormat = (time24) => {
    const [hours, minutes] = time24.split(":");
    let period = "AM";
    let hours12 = parseInt(hours, 10);

    if (hours12 === 0) {
      hours12 = 12;
    } else if (hours12 >= 12) {
      period = "PM";
      if (hours12 > 12) {
        hours12 -= 12;
      }
    }

    return `${hours12}:${minutes} ${period}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSession = {
      name: sessionName,
      schoolId: selectedSchool ? selectedSchool._id : null,
      classId: selectedClass ? selectedClass._id : null,
      day: selectedDay,
      startTime: convertTo12HourFormat(startTime),
      endTime: convertTo12HourFormat(endTime),
      isRepeatable: repeatSession,
    };

    try {
      await createSession(newSession);
      console.log("Session created:", newSession);
      navigate("/section");
    } catch (error) {
      console.error("Error creating session:", error);
    }
  };

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleDropdownToggle = (type) => {
    setDropdownOpen(dropdownOpen === type ? null : type);
  };

  const handleSchoolSelect = (school) => {
    setSelectedSchool(school);
    setDropdownOpen(null);
  };

  const handleClassSelect = (classItem) => {
    setSelectedClass(classItem);
    setDropdownOpen(null);
  };

  const handleClearSelection = (e, type) => {
    e.stopPropagation();
    if (type === "school") {
      setSelectedSchool(null);
    } else if (type === "class") {
      setSelectedClass(null);
    }
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
        <h1 className="text-2xl font-bold text-gray-800 mb-5">
          Add New Session
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="selectedDay" className="block text-gray-700">
              Select Day
            </label>
            <select
              id="selectedDay"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option value="" disabled>
                Select a day
              </option>
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="sessionName" className="block text-gray-700">
              Session Name
            </label>
            <input
              type="text"
              id="sessionName"
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="startTime" className="block text-gray-700">
                  Start Time
                </label>
                <input
                  type="time"
                  id="startTime"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded custom-time-picker"
                  pattern="[0-9]{2}:[0-9]{2}"
                  step="900"
                  title="Please enter a valid time in the format HH:MM AM/PM"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="endTime" className="block text-gray-700">
                  End Time
                </label>
                <input
                  type="time"
                  id="endTime"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                  className="w-full px-4 py-2 border focus:ring-[#e3ce27] focus:border-[#e3ce27] border-gray-300 rounded custom-time-picker"
                  pattern="[0-9]{2}:[0-9]{2}"
                  step="900"
                  title="Please enter a valid time in the format HH:MM AM/PM"
                />
              </div>
            </div>
          </div>

          <div className="mb-4 relative">
            <label htmlFor="className" className="block text-gray-700">
              Class Name
            </label>
            <div
              className="w-full flex items-center px-4 py-2 border border-gray-300 rounded cursor-pointer relative"
              onClick={() => handleDropdownToggle("class")}
            >
              <span className="flex-1">
                {selectedClass ? selectedClass.name : "Select a class"}
              </span>
              {selectedClass && (
                <AiOutlineClose
                  className="text-red-500 hover:text-red-700 cursor-pointer mr-2"
                  onClick={(e) => handleClearSelection(e, "class")}
                />
              )}
              {dropdownOpen === "class" ? (
                <AiOutlineUp className="text-gray-500" />
              ) : (
                <AiOutlineDown className="text-gray-500" />
              )}
            </div>
            {dropdownOpen === "class" && (
              <div className="absolute bg-white border border-gray-300 rounded mt-1 max-h-40 overflow-y-auto w-full z-10">
                {classes.map((classItem) => (
                  <div
                    key={classItem._id}
                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleClassSelect(classItem)}
                  >
                    <Checkbox
                      checked={
                        selectedClass && selectedClass._id === classItem._id
                      }
                      onChange={() => handleClassSelect(classItem)}
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
              onClick={() => handleDropdownToggle("school")}
            >
              <span className="flex-1">
                {selectedSchool ? selectedSchool.name : "Select a school"}
              </span>
              {selectedSchool && (
                <AiOutlineClose
                  className="text-red-500 hover:text-red-700 cursor-pointer mr-2"
                  onClick={(e) => handleClearSelection(e, "school")}
                />
              )}
              {dropdownOpen === "school" ? (
                <AiOutlineUp className="text-gray-500" />
              ) : (
                <AiOutlineDown className="text-gray-500" />
              )}
            </div>
            {dropdownOpen === "school" && (
              <div className="absolute bg-white border border-gray-300 rounded mt-1 max-h-40 overflow-y-auto w-full z-10">
                {schools.map((school) => (
                  <div
                    key={school._id}
                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSchoolSelect(school)}
                  >
                    <Checkbox
                      checked={
                        selectedSchool && selectedSchool._id === school._id
                      }
                      onChange={() => handleSchoolSelect(school)}
                    />
                    <span className="ml-2">{school.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* <div className="mb-4 flex items-center">
            <Checkbox
              checked={repeatSession}
              onChange={() => setRepeatSession(!repeatSession)}
            />
            <label htmlFor="repeatSession" className="ml-2 text-gray-700">
              Repeat Session
            </label>
          </div> */}
          <div className="mb-4 flex">
            <label className="block text-gray-700 me-3">Repeat Session</label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={repeatSession}
                onChange={() => setRepeatSession(!repeatSession)}
                className="sr-only peer"
              />
             <div className="relative w-9 h-5 bg-gray-400  rounded-full peer dark:bg-gray peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-yellow-500 "></div>
            </label>
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

export default SectionForm;

// <label key={toggle} className="inline-flex items-center cursor-pointer">
//                   <input
//                     type="checkbox"
//                     className="sr-only peer"
//                     onChange={() => {
//                       handleToggleChange(toggle);
//                       handleSpecificFunctionality(toggle);
//                     }}
//                     checked={toggles[toggle]}
//                   />
//                   <div className="relative w-9 h-5 bg-gray-400  rounded-full peer dark:bg-gray peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-yellow-500 "></div>
//                   <span className="ms-3 block text-sm font-medium text-gray-700">
//                     {toggleNames[toggle]}
//                   </span>
//                 </label>
