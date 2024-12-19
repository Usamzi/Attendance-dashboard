import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPayment = () => {
  const [paymentId, setPaymentId] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPayment = { paymentId, amount, date, status };
    console.log("New Payment:", newPayment);
    navigate("/payment-list");
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
      <h1 className="text-2xl font-bold text-gray-800 mb-5">Add Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="paymentId" className="block text-sm font-medium text-gray-700 ">
            Payment ID
          </label>
          <input
            type="text"
            id="paymentId"
            value={paymentId}
            onChange={(e) => setPaymentId(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 ">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 ">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 ">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
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

export default AddPayment;
