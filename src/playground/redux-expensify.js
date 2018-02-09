import {createStore,combineReducers} from "redux";
import uuid from "uuid";
//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SORT_BY_DATE
//SET_TEXT_FILTER
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//EXPENSE REDUCERS

const addExpense=({description="",note="",amount=0,createdAt=0}={})=>(
{
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
});

const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter=(text="")=>({
    type:"SET_TEXT_FILTER",
    text
});

const sortByAmount=()=>({
    type:"SORT_BY_AMOUNT"
})

const sortByDate=()=>({
    type:"SORT_BY_DATE"
})

const setStartDate=(startdate)=>({
    type:"SET_START_DATE",
    startdate

})
const setEndDate=(enddate)=>({
    type:"SET_END_DATE",
    enddate

})

const getVisibleExpenses=(expenses,filters)=>{
    return expenses.filter((expense)=>{
    const startDateMatch= typeof filters.startdate!=='number' || expense.createdAt>=filters.startdate;
    const endDateMatch= typeof filters.enddate!=='number' || expense.createdAt<=filters.enddate;
    const textMatch=expense.description.toLowerCase().includes(filters.text.toLowerCase());
        return startDateMatch&&endDateMatch&&textMatch;
    }).sort((a,b)=>{
        if(filters.sortby==="date")
            return a.createdAt>b.createdAt?1:-1;
        else if(filters.sortby==="amount")
            return a.amount<b.amount?1:-1;
    });
}
const expenseReducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return[
                ...state,action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((expense)=>expense.id!==action.id)
        
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                    if(expense.id===action.id){
                        return {
                            ...expense,
                            ...action.updates
                        }
                    }
                    else
                     return expense;
                })
            
        default:return state
    }
}
const filtersReducer=(state={},action)=>{
    switch(action.type){
        case "SET_TEXT_FILTER":
                return {...state, text:action.text}
        case "SORT_BY_DATE":
            return {...state,sortby:"date"}
        case "SORT_BY_AMOUNT":
            return {...state,sortby:"amount"}
        case "SET_START_DATE":
            return {...state,startdate:action.startdate}
        case "SET_END_DATE":
            return {...state,enddate:action.enddate}
        default:return state
    }
}
const store=createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filtersReducer
    })
);
store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);

    console.log(visibleExpenses);
    console.log(state.filters);
});
store.dispatch(setTextFilter('House'));
const expenseOne=store.dispatch(addExpense({
    description:"house Rent",
    amount:10 ,
    createdAt:454
}));
//console.log(expenseOne);
store.dispatch(addExpense({
    description:"car rent",
    amount:10000,
    note:"ehdka",
    createdAt:600
}));
//store.dispatch(removeExpense({id:expenseOne.expense.id}));

//store.dispatch(editExpense(expenseOne.expense.id,{description:"coffee",amount:30}));
//store.dispatch(setStartDate(452));
//store.dispatch(setEndDate(856));
//store.dispatch(setTextFilter('rent'));

//store.dispatch(sortByDate());
 store.dispatch(sortByAmount());

const demoState={
    expenses:[{
        id:"dakdsk",
        description:"",
        note:"",
        amount:0,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortby:'amount',
        startdate:'',
        enddate:""
    }
}

