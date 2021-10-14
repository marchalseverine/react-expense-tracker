import React from "react";
import ExpensesDate from "./ExpensesDate";
import "./ExpensesItem.css";
import Card from "./Card";

export default function ExpensesItem(props) {
  return (
    <Card>
      <div className="expense-item">
        <div className="countainer">
          <div className="row">
            <div className="col-6 expense-item___date">
              <ExpensesDate date={props.date} />
            </div>
            <div className="col-3 expense-item___description">
              <span>{props.title}</span>
            </div>
            <div className="col-3 expense-item___amount">
              <span>{props.amount}€</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
