import React from "react";
const EditExpense=(props)=>{
    console.log(props);
    return(
    <div>
Editing the expense of id:{props.match.params.id}    </div>
    );
}
export default EditExpense;