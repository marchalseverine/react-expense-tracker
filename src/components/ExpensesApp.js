import React from "react";
import ExpensesItem from "./ExpensesItem";
import "./ExpenseApp.css";

export default function ExpensesApp(props) {
  return (
    <div className="expenses-app">
      <h1 className="app-title">Expenses Tracker App </h1>
      <div className="items">
        <ExpensesItem
          title={props.data[0].title}
          date={props.data[0].date}
          amount={props.data[0].amount}
        />
        <ExpensesItem
          title={props.data[1].title}
          date={props.data[1].date}
          amount={props.data[1].amount}
        />

        <ExpensesItem
          title={props.data[2].title}
          date={props.data[2].date}
          amount={props.data[2].amount}
        />
        <ExpensesItem
          title={props.data[3].title}
          date={props.data[3].date}
          amount={props.data[3].amount}
        />
      </div>
    </div>
  );
}
