import React, { useState } from "react";
import "./NewExpenses.css";

export default function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      date: date,
      amount: amount,
    };
    console.log(expenseData);
    setDate("");
    setAmount("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container expense-form">
        <div className="row">
          <div className="col-4">
            Date
            <div className="expense___control___date">
              <input type="date" value={date} onChange={handleDateChange} />
            </div>
          </div>
          <div className="col-4">
            Title
            <div className="expense___control___title">
              <input type="text" value={title} onChange={handleTitleChange} />
            </div>
          </div>
          <div className="col-4">
            Amount
            <div className="expense___control___amount">
              <input
                type="number"
                min="0.00"
                step="0.00"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="new-expense__action">
        <button className="new-expense-button" type="submit">
          Add New Expense
        </button>
      </div>
    </form>
  );
}
