import './ExpenseItem.css'
function ExpenseItem(props) {
    const expenseDate = new Date(1998, 3, 2)
    const expenseTitle = "asdf"
    const amount = 4.44
    return (
        <div className="expense-item">
            <div>{expenseDate.toString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>

    )
}



export default ExpenseItem

