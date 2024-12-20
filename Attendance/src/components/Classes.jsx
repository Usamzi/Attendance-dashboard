import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getClasses, deleteClass } from "../api/classes/classAuth";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { GoPencil } from "react-icons/go";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await getClasses();
        setClasses(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const handleDelete = async (classId) => {
    try {
      await deleteClass(classId);
      setClasses((prevClasses) =>
        prevClasses.filter((classItem) => classItem._id !== classId)
      );
    } catch (err) {
      alert(`Failed to delete class: ${err.message}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
          <h1 className="text-2xl font-bold text-gray-800">Classes List</h1>
          <Link
            to="/add-class"
            className="px-4 py-2 bg-[#e3ce27] text-white rounded hover:bg-yellow-500"
          >
            Add Class
          </Link>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#e3ce27] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Class Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                School Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Total Students
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem, index) => (
              <tr key={index} className="odd:bg-white">
                <td className="border border-gray-300 px-4 py-2">
                  {classItem.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {classItem?.SchoolId?.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {classItem.totalStudents || 12}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex items-center justify-center gap-2">
                    <GoPencil
                      size={25}
                      className="text-red-500 hover:text-[#e3ce27] cursor-pointer"
                    />
                    <MdDelete
                      size={25}
                      className="text-red-500 hover:text-[#e3ce27] cursor-pointer"
                    />
                    <IoEyeSharp
                      size={25}
                      className="text-gray-500 hover:text-[#e3ce27] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
