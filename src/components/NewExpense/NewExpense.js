import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [openForm, setOpenForm] = useState(false);
  const saveExpensesDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const openFormHandler = () => {
    setOpenForm(true);
  };

  const closeFormHandler = () => {
    setOpenForm(false);
  };

  let button = <button onClick={openFormHandler}>Open Form</button>;
  return (
    <div className="new-expense">
      {openForm === false && button}
      {openForm === true && (
        <ExpenseForm
          onCloseModal={closeFormHandler}
          onSaveExpenseData={saveExpensesDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
