import React from "react";
import {connect } from "react-redux";
//import uuid from "uuid";
import {addExpense} from "../actions/expenses"
import ExpenseForm from "./ExpenseForm";
const CreateExpense=(props)=>{
    return(
    <div>
    <h1>Add Expense</h1>
    <ExpenseForm onSubmit={(expense)=>
        {
            console.log(expense);
            props.dispatch(addExpense(expense));
            props.history.push("/")
        }}/>
    </div>
    );
}
export default connect()(CreateExpense);