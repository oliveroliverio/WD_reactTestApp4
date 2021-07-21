import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Spotify',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
   
  return (
  <div>
    <h2>Expenses</h2>
    <p>Description text</p>
    <ExpenseItem></ExpenseItem>
    <ExpenseItem></ExpenseItem>
    <ExpenseItem></ExpenseItem>
    <ExpenseItem></ExpenseItem>
  </div>
  )
}

export default App