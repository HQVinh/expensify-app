import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

// addExpense -> Water bill
// addExpense -> Gas bill
// setTextFilter -> bill
// getVisibleExpenses -> print visible ones to screen

const expenseOne = store.dispatch(
  addExpense({ description: "Water bill", amount: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Gas bill", amount: 5000, createdAt: 1000 })
);
const expenseThree = store.dispatch(
  addExpense({ description: "Turtur", amount: 10000000 })
);

const state = store.getState();

console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
