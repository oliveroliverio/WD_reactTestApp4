import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  return (
  <div>
    <h2>Title</h2>
    <p>Description text</p>
    <ExpenseItem></ExpenseItem>
    <ExpenseItem></ExpenseItem>
    <ExpenseItem></ExpenseItem>
    <ExpenseItem></ExpenseItem>
  </div>
  )
}

export default App