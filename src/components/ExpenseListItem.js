import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {removeExpense} from "../actions/expenses"
const ExpenseListItem=(props)=>{
    return(
        <div>
                <Link to={`/edit/${props.expense.id}`}>
                <h2>{props.expense.description}</h2></Link>
                <h4>{props.expense.amount}- {props.expense.createdAt}</h4>
                <button onClick={(e)=>{props.dispatch(removeExpense({id:props.expense.id}))}}>Remove</button>
        </div>
    )
}


export default connect()(ExpenseListItem);