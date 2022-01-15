import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpense(false);
  };

  const [addExpense, setAddExpense] = useState(false);

  const buttonHandler = () => {
    setAddExpense(true);
  };

  const onCancelHandler = () => {
    setAddExpense(false);
  };

  return (
    <div className="new-expense">
      {!addExpense && (
        <div className="new-expense__button ">
          <button onClick={buttonHandler}>Add Expense</button>
        </div>
      )}

      {addExpense && (
        <div className="new-expense">
          <ExpenseForm
            onCancel={onCancelHandler}
            onSaveExpenseData={saveExpenseDataHandler}
          />
        </div>
      )}
    </div>
  );
};

export default NewExpense;
