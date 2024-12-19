import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSessions } from '../api/sessionTime/sessionAuth';

const Section = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const data = await getSessions();
        setSessions(data.data);
      } catch (error) {
        console.error('Failed to fetch sessions:', error);
      }
    };

    fetchSessions();
  }, []);

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
            Add Session
          </button>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#e3ce27] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Session Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">School Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Class Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Session Start</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Session End</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Session Student</th>
            </tr>
          </thead>
          <tbody>
            {sessions?.map((session, index) => (
              
              <tr key={index} className="odd:bg-white">
                <td className="border border-gray-300 px-4 py-2">{session?.name}</td>
                <td className="border border-gray-300 px-4 py-2">{session.schoolId.name}</td>
                <td className="border border-gray-300 px-4 py-2">{session.classId.name}</td>
                <td className="border border-gray-300 px-4 py-2">{session.startTime}</td>
                <td className="border border-gray-300 px-4 py-2">{session.endTime}</td>
                <td className="border border-gray-300 px-4 py-2">{session.totalStudents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Section;
