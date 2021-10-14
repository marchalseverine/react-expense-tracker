import React from "react";

export default function ExpensesDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expenses-date">
      <span>{day}</span>
      <span> {month}</span>
      <span> {year}</span>
    </div>
  );
}
