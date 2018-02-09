import React from "react";
import {BrowserRouter,Route,Link,NavLink,Switch} from "react-router-dom";
import Home from "../components/Home";
import CreateExpense from "../components/createexpense";
import Contact from "../components/contact";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import EditExpense from "../components/EditExpense";
const AppRouter=()=>{return(
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/create" component={CreateExpense}/>
        <Route path="/edit/:id" component={EditExpense}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </BrowserRouter>
);
}
export default AppRouter;