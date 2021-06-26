import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'
function Expenses(props) {
  const { expenses } = props
  const [fullYear, setFullYear] = useState('')

  const selectFilterValue = (val) => {
    setFullYear(val)
  }

  const expensesFilter = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === fullYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectFilterValue={selectFilterValue} />
      <ExpensesChart expenses={expensesFilter}/>
      <ExpenseList items={expensesFilter} />
    </Card>
  )
}

export default Expenses
