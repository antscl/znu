import React, { useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseHistogram from "./components/ExpenseHistogram";
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2021");
  const [isAdding, setIsAdding] = useState(false);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => [...prev, { ...expense, amount: +expense.amount }]);
    setIsAdding(false);
  };

  const filteredExpenses = expenses.filter(
    (expense) => new Date(expense.date).getFullYear().toString() === selectedYear
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      {isAdding ? (
        <AddExpenseForm
          onAddExpense={addExpenseHandler}
          onCancel={() => setIsAdding(false)}
        />
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="bg-purple-700 text-white px-4 py-2 rounded-md mb-4"
        >
          Add New Expense
        </button>
      )}
      <ExpenseFilter
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
      />
      <ExpenseHistogram
        data={filteredExpenses.map((expense) => ({
          month: new Date(expense.date).toLocaleString("default", {
            month: "short",
          }),
          amount: expense.amount,
        }))}
      />
      {filteredExpenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default App;
