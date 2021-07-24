import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
function Expenses() {
    const expenses = [
      {
        id: 'e1',
        title: 'Spotify',
        amount: 94.12,
        date: new Date(1998, 3, 15),
      },
      { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2013, 3, 15),
      },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(1992, 3, 15),
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 3, 15),
      }
    ];
  
   
     
    return (
    <Card className="expenses">
      <h2>Expenses</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
    )
  }
  
  export default Expenses