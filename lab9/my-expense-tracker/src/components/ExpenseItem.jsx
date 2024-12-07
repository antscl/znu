import React from "react";

const ExpenseItem = ({ title, date, amount }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md flex justify-between items-center mb-4">
      <div>
        <p className="text-sm">{new Date(date).toLocaleDateString()}</p>
        <p className="text-lg font-bold">{title}</p>
      </div>
      <p className="bg-purple-700 text-white p-2 rounded-md">${amount}</p>
    </div>
  );
};

export default ExpenseItem;
