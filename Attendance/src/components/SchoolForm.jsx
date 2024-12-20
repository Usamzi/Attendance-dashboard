import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerSchool, updateSchool } from "../api/school/schoolAuth.js";

const SchoolForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.schoolData;

  const [toggles, setToggles] = useState({
    addStudents: false,
    addSchedules: false,
    addDevices: false,
    add1Time: false,
    scheduleOverride: false,
  });

  useEffect(() => {
    if (data) {
      formik.setValues({
        name: data.name || "",
        email: data.email || "",
        phoneNumber: data.phoneNumber || "",
        password: data.password || "",
        location: data.location || "",
        role: data.role || "school",
      });
      setToggles(data.Permissions || toggles);
    }
  }, [data]);

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
        if (data) {
          // Update existing school
          const response = await updateSchool(data.id, dataToSend);
          console.log("Update API Response:", response);
        } else {
          // Register new school
          const response = await registerSchool(dataToSend);
          console.log("Register API Response:", response);
        }
        navigate("/Schools");
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  });

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
          {data ? "Edit School" : "Add New School"}
        </h1>
        <form onSubmit={formik.handleSubmit}>
          {["name", "email", "phoneNumber", "password", "location"].map((field, idx) => (
            <div className="mb-4" key={idx}>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={formik.values[field]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {formik.touched[field] && formik.errors[field] && (
                <p className="text-red-500 text-sm mt-1">{formik.errors[field]}</p>
              )}
            </div>
          ))}

          <div>
            <h1 className="text-1xl font-bold text-gray-800 mb-5">Permissions</h1>
          </div>

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
                    onChange={() => handleToggleChange(toggle)}
                    checked={toggles[toggle]}
                  />
                  <div className="relative w-9 h-5 bg-gray-400 rounded-full peer dark:bg-gray peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-yellow-500"></div>
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
              {data ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SchoolForm;
