import React from 'react'

export const Schools = () => {
    
  return (
    <>
     <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-6xl mx-auto bg-white p-5 shadow-md rounded-md">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold text-gray-800">School List</h1>
          <button
            className="px-4 py-2 bg-[#e3ce27] text-white rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          > Add School 
          </button>
        </div>
        <table className="w-full border-collapse border  border-gray-300">
          <thead>
            <tr className="bg-[#e3ce27] text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">ID #</th>
              <th className="border border-gray-300 px-4 py-2 text-left">School Name </th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email </th>
              <th className="border border-gray-300 px-4 py-2 text-left">Phone Number </th>
              <th className="border border-gray-300 px-4 py-2 text-left">Subscription</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Location </th>
              
            </tr>
          </thead>
          <tbody>
           
              <tr className="odd:bg-white even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2"> 1</td>
                <td className="border border-gray-300 px-4 py-2">School</td>
                <td className="border border-gray-300 px-4 py-2">School1@.com</td>
                <td className="border border-gray-300 px-4 py-2">1234567</td>
                <td className="border border-gray-300 px-4 py-2">1 Year</td>
                <td className="border border-gray-300 px-4 py-2">Abc Road Street NO #</td>
              </tr>

              <tr>
              <td className="border border-gray-300 px-4 py-2"> 2</td>
              <td className="border border-gray-300 px-4 py-2">School</td>
              <td className="border border-gray-300 px-4 py-2">School1@.com</td>
                <td className="border border-gray-300 px-4 py-2">1234567</td>
                <td className="border border-gray-300 px-4 py-2">1 Year</td>
                <td className="border border-gray-300 px-4 py-2">Abc Road Street NO #</td>
              </tr>
          
              <tr>
              <td className="border border-gray-300 px-4 py-2"> 3</td>
              <td className="border border-gray-300 px-4 py-2">School</td>
              <td className="border border-gray-300 px-4 py-2">School1@.com</td>
                <td className="border border-gray-300 px-4 py-2">1234567</td>
                <td className="border border-gray-300 px-4 py-2">1 Year</td>
                <td className="border border-gray-300 px-4 py-2">Abc Road Street NO #</td>

              </tr>
              
          </tbody>

          
        </table>
      </div>
    </div>
  
    </>
  )
}
  