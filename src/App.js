import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expenses = [
    {title: 'Spotify', amount: 9.99, date: new Date(1985, 11, 15)},
    {title: 'Spotify', amount: 9.99, date: new Date(1985, 11, 15)},
    {title: 'Spotify', amount: 9.99, date: new Date(1985, 11, 15)},
    {title: 'Spotify', amount: 9.99, date: new Date(1985, 11, 15)},
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