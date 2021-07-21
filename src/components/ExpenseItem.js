import './ExpenseItem.css'
function ExpenseItem() {
    return (
        <div>
            <div className="expense-item">
            <div>Nov 15, 1985</div>
            <div className="expense-item__descprition"></div>
                <h2>Spotify</h2>
                <div className="expense-item__price">$9.99</div>
            </div>
        </div>
    )
}

export default ExpenseItem