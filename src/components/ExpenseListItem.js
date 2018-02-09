import React from "react";
import {connect} from "react-redux";
import {removeExpense} from "../actions/expenses"
const ExpenseListItem=(props)=>{
    return(
        <div>
            <ul>
                <li>{props.expense.description&&<p>{props.expense.description} </p>}</li>
                <li>{props.expense.amount&&<p>{props.expense.amount} </p>}</li>
                <li>{props.expense.createdAt&&<p>{props.expense.createdAt} </p>}</li>
            </ul>
            <button onClick={(e)=>{props.dispatch(removeExpense({id:props.expense.id}))}}>Remove</button>
        </div>
    )
}


export default connect()(ExpenseListItem);