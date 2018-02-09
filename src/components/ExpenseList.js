import React from "react";
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleChanges from "../selectors/expenses";
import ConnectedExpenseListFilters from "./ExpenseListFilters";
const ExpenseList=(props)=>{
    return(
        <div>
        <ConnectedExpenseListFilters/>
        <h1>Expense List</h1>
        {props.expenses.map((expense)=>{
            return(
            <ExpenseListItem key={expense.id} expense={expense}/>
            )
        })}
        </div>
    )
}

const ConnectedExpenseList=connect((state)=>({
    expenses:getVisibleChanges(state.expenses,state.filters)
}))(ExpenseList);

export default ConnectedExpenseList;