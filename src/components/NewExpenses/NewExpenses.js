import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpenses(props) {
  const addExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expenses">
      <ExpenseForm onSaveExpenseData={addExpenseData} />
    </div>
  );
}
