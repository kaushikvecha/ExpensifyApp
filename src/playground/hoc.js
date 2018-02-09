//Higher order component
import React from "react";
import ReactDOM from "react-dom";
const Info=(props)=>(
    <div>
    <h1>Info</h1>
    <p>details:{props.info}</p>
    </div>
);
const checkAuthentication=(WrappedComponent)=>{
    return (props)=>(
    <div>
        {props.isAdmin===true?<p>welcome Admin</p>:<p>un authorized user</p>}
        <WrappedComponent {...props}/>
    </div>
    )
}

const Authentication=checkAuthentication(Info);
ReactDOM.render(<Authentication isAdmin={true} info="I am kaushik"/>,document.getElementById('app'));