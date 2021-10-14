import React from "react";
import "./NewExpenses.css";

export default function ExpenseForm() {
  return (
    <form>
      <div className="container expense-form">
        <div className="row">
          <div className="col-4">
            Date
            <div className="expense___control___date">
              <input type="date" />
            </div>
          </div>
          <div className="col-4">
            Title
            <div className="expense___control___title">
              <input type="text" placeholder="What?" />
            </div>
          </div>
          <div className="col-4">
            Amount
            <div className="expense___control___amount">
              <input type="number" min="0.00" step="0.00" placeholder="€" />
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
