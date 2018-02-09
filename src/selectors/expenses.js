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
export default getVisibleExpenses;