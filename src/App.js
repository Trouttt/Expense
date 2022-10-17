import logo from "./logo.svg";
import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Carro 1",
    amount: 294.67,
    date: new Date(2022, 5, 10),
  },
  {
    id: "e2",
    title: "carro 2",
    amount: 300.67,
    date: new Date(2022, 5, 11),
  },
  {
    id: "e3",
    title: "hinosam",
    amount: 881.67,
    date: new Date(2022, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
