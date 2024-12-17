import React from 'react'
import { useNavigate } from 'react-router-dom';

const Payments = () => {

  const navigate = useNavigate();
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
      <h1 className="text-2xl font-bold text-gray-800">Payment Details</h1>
      <button
        className="px-4 py-2 bg-[#e3ce27] text-white rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
      >
        Add Payment
      </button>
    </div>
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-[#e3ce27] text-white">
          <th className="border border-gray-300 px-4 py-2 text-left">Payer Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Payment Date</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Class/Section</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Payment Type</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="odd:bg-white even:bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">School 1</td>
          <td className="border border-gray-300 px-4 py-2">$1000</td>
          <td className="border border-gray-300 px-4 py-2">2024-12-01</td>
          <td className="border border-gray-300 px-4 py-2">Class 5 - Section A</td>
          <td className="border border-gray-300 px-4 py-2">Tuition Fee</td>
          <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">Paid</td>
        </tr>
        <tr className="odd:bg-white even:bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">School 2</td>
          <td className="border border-gray-300 px-4 py-2">$500</td>
          <td className="border border-gray-300 px-4 py-2">2024-11-25</td>
          <td className="border border-gray-300 px-4 py-2">Class 3 - Section B</td>
          <td className="border border-gray-300 px-4 py-2">Exam Fee</td>
          <td className="border border-gray-300 px-4 py-2 text-red-600 font-semibold">Pending</td>
        </tr>
        <tr className="odd:bg-white even:bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">School 3</td>
          <td className="border border-gray-300 px-4 py-2">$750</td>
          <td className="border border-gray-300 px-4 py-2">2024-12-10</td>
          <td className="border border-gray-300 px-4 py-2">Class 8 - Section C</td>
          <td className="border border-gray-300 px-4 py-2">Miscellaneous Charges</td>
          <td className="border border-gray-300 px-4 py-2 text-yellow-600 font-semibold">Partially Paid</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  )
}

export default Payments