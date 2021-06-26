import './ExpenseForm.css'
import { useState } from 'react'
import { Form, Button, Col, InputGroup } from 'react-bootstrap'

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // })
  const [validated, setValidated] = useState(false)

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value
    // })
    // setUserInput((prevState) => {
    //   return {...prevState, title: event.target.value}
    // })
  }

  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value
    // })
    // setUserInput((prevState) => {
    //   return {...prevState, amount: event.target.value}
    // })
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value
    // })
    // setUserInput((prevState) => {
    //   return {...prevState, date: event.target.value}
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      const expenseData = {
        title: title,
        amount: +amount,
        date: new Date(date),
      }
      props.onSaveExpenseData(expenseData)
      setTitle('')
      setAmount('')
      setDate('')
      props.cancel()
     
    }
     setValidated(true)
  }

  return (
    <Form onSubmit={submitHandler} noValidate validated={validated}>
      <Form.Row>
        <Col>
          <Form.Group controlId="validationCustomTitle">
            <Form.Label>Title</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={titleChangeHandler}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a tite.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="validationCustomAmount">
            <Form.Label>Amount</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="number"
                value={amount}
                onChange={amountChangeHandler}
                min="0.01"
                step="0.01"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter an amount.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Group controlId="validationCustomDate">
        <Form.Label>Date</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="date"
            required
            value={date}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
          <Form.Control.Feedback type="invalid">
            Please choose a date.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Row className="d-flex justify-content-end">
        <Button onClick={props.cancel} variant="danger" className="mr-2">
          cancel
        </Button>
        <Button variant="dark" type="submit">
          add expense
        </Button>
      </Form.Row>
    </Form>
  )
}

export default ExpenseForm
