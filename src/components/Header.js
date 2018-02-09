import React from "react";
import {BrowserRouter,Route,Link,NavLink,Switch} from "react-router-dom";
const Header=()=>{
    return(
    <div>
    <header>
    Expensify
    </header>
    <NavLink to="/" activeClassName="isActive" exact={true}> DashBoard</NavLink>
    <NavLink to="/create" activeClassName="isActive" > CreateExpense</NavLink> 
    <NavLink to="/contact" activeClassName="isActive" > Contact</NavLink>
    </div>
    );
}
export default Header;