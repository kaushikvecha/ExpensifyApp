import React from "react";
import ExpenseForm from "./ExpenseForm";
import moment from "moment";
import "react-dates/initialize"
import {SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
const CreateExpense=()=>{
    return(
    <div>
    <h1>Add Expense</h1>
    <ExpenseForm/>
    </div>
    );
}
export default CreateExpense;