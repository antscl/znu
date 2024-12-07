import React from "react";

const ExpenseFilter = ({ selectedYear, onYearChange }) => {
  return (
    <div className="bg-gray-800 p-4 text-white rounded-md flex justify-between items-center">
      <label className="text-lg">Filter by year</label>
      <select
        value={selectedYear}
        onChange={(e) => onYearChange(e.target.value)}
        className="bg-gray-700 text-white p-2 rounded-md"
      >
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
