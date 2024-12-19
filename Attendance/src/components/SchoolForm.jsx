import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerSchool } from "../api/school/schoolAuth.js";

const SchoolForm = () => {
  const navigate = useNavigate();

 
  const [toggles, setToggles] = useState({
    addStudents: "",
    addSchedules: "",
    addDevices: "",
    add1Time: "",
    scheduleOverride: "",
  });


  const handleToggleChange = (id) => {
    setToggles((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      location: "",
      role: "school",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("School name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
        .required("Phone number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .required("Password is required"),
      location: Yup.string().required("Location is required"),
    }),

    onSubmit: async (values) => {
  

      const dataToSend = {
        ...values,
        Permissions: toggles, 
      };

      try {
        const response = await registerSchool(dataToSend);
        console.log("API Response:", response);
        navigate("/Schools");
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  });

 
  const handleSpecificFunctionality = (toggleId) => {
    switch (toggleId) {
      case "addStudents":
        console.log("Functionality for ADD STUDENTS");
      
        break;
      case "addSchedules":
        console.log("Functionality for ADD SCHEDULES");
       
        break;
      case "addDevices":
        console.log("Functionality for ADD DEVICES");
       
        break;
      case "add1Time":
        console.log("Functionality for ADD 1 TIME SCHED");
      
        break;
      case "scheduleOverride":
        console.log("Functionality for SCHEDULE OVERRIDE MESSAGE");
       
        break;
      default:
        console.log("Unknown toggle");
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
        <h1 className="text-2xl font-bold text-gray-800 mb-5">Add New School</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">School Name</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phoneNumber}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Adress</label>
            <input
              type="text"
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {formik.touched.location && formik.errors.location && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.location}</p>
            )}
          </div>


          <div><h1 className="text-1xl font-bold text-gray-800 mb-5">Permissions</h1></div>

         
          <div className="flex justify-between items-center space-x-4 mb-12 mt-8">
            {Object.keys(toggles).map((toggle, index) => {
              const toggleNames = {
                addStudents: "ADD STUDENTS",
                addSchedules: "ADD SCHEDULES",
                addDevices: "ADD DEVICES",
                add1Time: "ADD 1 TIME SCHED",
                scheduleOverride: "SCHEDULE OVERRIDE MESSAGE",
              };

              return (
                <label key={toggle} className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    onChange={() => {
                      handleToggleChange(toggle);
                      handleSpecificFunctionality(toggle); 
                    }}
                    checked={toggles[toggle]}
                  />
                  <div className="relative w-9 h-5 bg-gray-400  rounded-full peer dark:bg-gray peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-yellow-500 "></div>
                  
                  <span className="ms-3 block text-sm font-medium text-gray-700">
                    {toggleNames[toggle]}
                  </span>
                </label>
              );
            })}
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
