import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    
    // const[enteredTitle, setEnteredTitle] = useState('')
    // const[enteredAmount, setEnteredAmount] = useState('')
    // const[enteredDate, setEnteredDate] = useState('')
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })
    // now it's in one state object.  however now, you need to update all 3 properties and not just one
    // which is what you would normally do. 
    
    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,  
        //     enteredTitle: event.target.value
        // }) 
        // Now he's recommending this.  You need return the previous state to the new state
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        })
        // this is the safest way, making sure you're operating on the latest state (react schedules states)
    }
    const amountChangeHandler = event => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        })
    };

    const dateChangeHandler = event => {
        setUserInput({
            ...userInput, 
            enteredDate: event.target.value
        })
    }; 


    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control"> 
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control"> 
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control"> 
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-01-01" onChage={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button>Add Expense</button>
        </div>
    </form>
}
export default ExpenseForm