import React from "react";
import ConnectedExpenseList from "./ExpenseList"
const Home=()=>{
    return(
    <div>
    Welcome To Expensify App
    <ConnectedExpenseList/>
    </div>
    );
}
export default Home;