import React from "react";
import moment from "moment";
import {connect} from "react-redux";
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from "../actions/filters";
import "react-dates/initialize";
import {DateRangePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";


class ExpenseListFilters extends React.Component{
    constructor(props){
        super(props);
        this.state={
            focusedInput:null
        }
    }
    onDateChange=({startdate,enddate})=>{
        this.props.dispatch(setStartDate(startdate));
        this.props.dispatch(setEndDate(enddate));
    }
    onFocusChange=(focusedInput)=>{
       this.setState(()=> {focusedInput})
    }
   render(){
       return(
       <div>
  
    <input type="text" value={this.props.filters.text} onChange={(e)=>{
        
        this.props.dispatch( setTextFilter(e.target.value));
          
    }}
    />
    <select onChange={(e)=>{
        if(e.target.value==="date")
            {
                this.props.dispatch(sortByDate());
            }
        else{
               this.props.dispatch(sortByAmount());
        }

        }}>
    <option value="date">Date</option>
    <option value="amount">Amount</option>
    </select>
    <DateRangePicker
            startDate={this.props.filters.startdate} // momentPropTypes.momentObj or null,
           startDateId="startdate"
            endDate={this.props.filters.enddate} // momentPropTypes.momentObj or null,
          endDateId="enddate"
            onDatesChange={this.onDateChange} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
            numberOfMonths={1}
            isOutsideRange={()=>false}
            showClearDates={true}
            />
    </div>
    )
    }
 }

const ConnectedExpenseListFilters=connect((state)=>({
    expenses:state.expenses,
    filters:state.filters

}))(ExpenseListFilters);

export default ConnectedExpenseListFilters;