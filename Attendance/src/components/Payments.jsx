import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentList = () => {
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
        <h1 className="text-2xl font-bold text-gray-800">Payment List</h1>
        <button
          onClick={() => navigate("/add-payment")}
          className="px-4 py-2 bg-[#e3ce27] text-white rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          Add Payment
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#e3ce27] text-white">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Payment ID
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Amount
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Date
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">$100</td>
            <td className="border border-gray-300 px-4 py-2">2024-12-19</td>
            <td className="border border-gray-300 px-4 py-2">Paid</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  );
};

export default PaymentList;
