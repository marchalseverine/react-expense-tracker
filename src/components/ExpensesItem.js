import React, { useState } from "react";
import ExpensesDate from "./ExpensesDate";
import "./ExpensesItem.css";
import Card from "./Card";

export default function ExpensesItem(props) {
  const [title, setTitle] = useState(props.title);

  const handleClick = (event) => {
    event.preventDefault();
    setTitle("Update!!");
  };

  return (
    <Card>
      <div className="expense-item">
        <div className="countainer">
          <div className="row">
            <div className="col-6 expense-item___date">
              <ExpensesDate date={props.date} />
            </div>
            <div className="col-3 expense-item___description">
              <span>{title}</span>
            </div>
            <div className="col-3 expense-item___amount">
              <span>{props.amount}€</span>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleClick}>Change title</button>
    </Card>
  );
}
