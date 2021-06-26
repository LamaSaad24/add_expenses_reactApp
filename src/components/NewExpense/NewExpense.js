import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react'
import { Button } from 'react-bootstrap'

const NewExpense = (props) => {
	const [isEditing, setIsEditing]=useState(false)

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseDate = {
			...enteredExpenseData,
			id : Math.random().toString()
		}
		props.onAddExpenseHandler(expenseDate)
	}

	const closeEditing=()=>{
		setIsEditing(false)
	}

	const showEditing=()=>{
		setIsEditing(true)
	}
	return (
		<div className='new-expense'>
		{isEditing?(
			<ExpenseForm cancel={closeEditing} onSaveExpenseData={saveExpenseDataHandler} />
		):(
			<Button type="submit" onClick={showEditing} className="m-auto d-block" variant="dark">add expense</Button>
		)}
			
		</div>
	);
};

export default NewExpense;
