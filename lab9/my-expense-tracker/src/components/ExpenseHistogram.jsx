import React from "react";

const ExpenseHistogram = ({ data }) => {
  const maxExpense = Math.max(...data.map((expense) => expense.amount));

  return (
    <div className="flex gap-2 items-end bg-purple-100 p-4 rounded-md">
      {data.map((expense, index) => (
        <div
          key={index}
          className="bg-purple-700 text-white flex-1 text-center"
          style={{
            height: `${(expense.amount / maxExpense) * 100}%`,
          }}
        >
          {expense.month}
        </div>
      ))}
    </div>
  );
};

export default ExpenseHistogram;
