import React from "react";
import moment from "moment";
import "react-dates/initialize";
import {SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
console.log(moment().format("MMM Do YY"))
export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
       this.state={
            description:props.expense? props.expense.description:"",
            amount:props.expense? (props.expense.amount/100).toString():"",
            createdAt:props.expense? moment(props.expense.createdAt):moment(),
            note:props.expense? props.expense.note:"" ,
            calendarFocused:false
        }
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
        if(createdAt)
       this.setState(()=>({createdAt}));
    }
    onFocusChanged=({focused})=>{
        this.setState(()=>({calendarFocused:focused}));
    }                                      
    onSubmit=((e) =>{
        e.preventDefault();
        console.log("hellop");
      this.props.onSubmit(({
          description:this.state.description,
          amount:parseFloat(this.state.amount,10)*100,
          createdAt:this.state.createdAt.valueOf(),
          note:this.state.note
      }));
    }         );                                                   
    render(){
        return(
            <div>
            <form onSubmit={this.onSubmit}>
            <input type="text" value={this.state.description} placeholder="Description" autoFocus onChange={this.descriptionChange}/>
            <input type="text" value={this.state.amount} placeholder="Amount" onChange={this.amountChange}/><br/>
            <SingleDatePicker date={this.state.createdAt} 
            onDateChange={this.onDateChanged} 
            focused={this.state.calendarFocused} 
            onFocusChange={this.onFocusChanged} 
            numberOfMonths={1}
            isOutsideRange={()=>false}
            />
            <textarea placeholder="Add optional notes for the Expense" value={this.state.note} onChange={this.noteChange}></textarea>
            <button >Add Expense</button>
            </form>
            </div>
        )
    }
}