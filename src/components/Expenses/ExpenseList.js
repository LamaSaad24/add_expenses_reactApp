import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {

    if (props.items.length === 0) {
        return <p className="expenses__notic">No Expense Item Found</p>
    }
    
    return (
      <ul>
      {
          props.items.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
        ))
      }
      </ul>
    );
}

export default ExpenseList;