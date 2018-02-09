import React from "react";
import {connect} from "react-redux";
import {setTextFilter,sortByAmount,sortByDate} from "../actions/filters";


const ExpenseListFilters=(props)=>(
    <div>
  
    <input type="text" value={props.filters.text} onChange={(e)=>{
        
        props.dispatch( setTextFilter(e.target.value));
          
    }}
    />
    <select onChange={(e)=>{
        if(e.target.value==="date")
            {
                props.dispatch(sortByDate());
            }
        else{
                props.dispatch(sortByAmount());
        }

        }}>
    <option value="date">Date</option>
    <option value="amount">Amount</option>
    </select>
    </div>
)

const ConnectedExpenseListFilters=connect((state)=>({
    expenses:state.expenses,
    filters:state.filters

}))(ExpenseListFilters);

export default ConnectedExpenseListFilters;