import React from "react";
import {connect} from "react-redux"
import ExpenseForm from "./ExpenseForm"
import {editExpense} from "../actions/expenses"
const EditExpense=(props)=>{
    console.log(props);
    return(
    <div>  
    <ExpenseForm expense={props.expense} onSubmit={(expense)=>{
            props.dispatch(editExpense(props.match.params.id,expense));
            props.history.push("/");
    }}/>    
    </div>
    );
}
export default connect((state,props)=>{
    return{
    expense:state.expenses.find((expense)=>{
        if(expense.id===props.match.params.id)
        return true;
    })}
})(EditExpense);