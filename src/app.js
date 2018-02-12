import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,Link,NavLink,Switch} from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import configStore from "./store/configureStore"
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { addExpense } from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import {Provider} from "react-redux";

const store=configStore();
store.dispatch(addExpense({description:"water bill",amount:7800,createdAt:600}));
store.dispatch(addExpense({description:"current bill",amount:300,createdAt:680}));
store.dispatch(addExpense({description:"gas bill",amount:800,createdAt:800}));


const jsx=(
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx,document.getElementById('app'));



























// class Action extends React.Component{

   
//         render(){
//         return(
//             <div>
//             <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>what should I do?</button>
           
//             </div>
//         );
//     }
// }

// class Options extends React.Component{
//     render(){
//         return(
//         <div>
//         {
//             this.props.options.map((option)=> <Option key={option} option={option}/>)
            
//         }
//         <button onClick={this.props.removeAll}>RemoveAll</button>
//         </div>
//     );
//     }
// }

// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//         <p>{this.props.option}</p>
//         </div>
//         );
//     }
// }



