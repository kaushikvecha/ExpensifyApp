import React from "react";
import moment from "moment";
import "react-dates/initialize"
import {SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
console.log(moment().format("MMM Do YY"))
export default class ExpenseForm extends React.Component{
     state={
        description:"",
        amount:"",
        note:"" ,
        createdAt:moment(),
        calendarFocused:false
    }
    descriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({
            description
        }));
    }
    amountChange=(e)=>{
        const amount=e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
        this.setState(()=>({
            amount
        }));
    }
    }

    noteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>({
            note
        }));
    }
    onDateChanged=(createdAt)=>{
       this.setState=()=>({createdAt});
    }
    onFocusChanged=({focused})=>{
        this.setState=()=>({calendarFocused:focused});
    }                                                                                                   
    render(){
        return(
            <div>
            <input type="text" value={this.state.description} placeholder="Description" autoFocus onChange={this.descriptionChange}/>
            <input type="text" value={this.state.amount} placeholder="Amount" onChange={this.amountChange}/><br/>
            <SingleDatePicker date={this.state.createdAt} 
            onDateChange={this.onDateChanged} 
            focused={this.state.calendarFocused} 
            onFocusChange={this.onFocusChanged} />
            <textarea placeholder="Add optional notes for the Expense" value={this.state.note} onChange={this.noteChange}></textarea>
            <button>Add Expense</button>
            </div>
        )
    }
}