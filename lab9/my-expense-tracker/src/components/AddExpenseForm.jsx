import React, { useState } from "react";

const AddExpenseForm = ({ onAddExpense, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(formData);
    setFormData({ title: "", amount: "", date: "" });
  };

  return (
    <div className="bg-purple-200 p-6 rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="p-2 rounded-md border border-gray-300 w-full"
          />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="p-2 rounded-md border border-gray-300 w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-2 rounded-md border border-gray-300 w-full"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-purple-700 text-white px-4 py-2 rounded-md"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;
