import './ExpenseItem.css'
import Card from '../UI/Card' 
import ExpenseDate from '../Expense/ExpenseDate'
function ExpenseItem(props) {
    let title = props.title
    function clickHandler() {
        console.log("clicked (but using click handler!!!")
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>

    )
}
export default ExpenseItem

