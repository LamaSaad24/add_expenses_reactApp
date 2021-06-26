import './ExpensesFilter.css'
const ExpensesFilter = (props) => {

    const selectValueHandler = (event) => {
        props.onSelectFilterValue(event.target.value)
    }

    return (
        <form>
            <div className="expensesFilter">
                <label className="expensesFilter__label">filter By Year</label>
                <select  className="expensesFilter__input"  onChange={selectValueHandler}>
                    <option value="2022" key="1">2022</option>
                    <option value="2021" key="2">2021</option>
                    <option value="2020" key="3">2020</option>
                    <option value="2019" key="4">2019</option>
                    <option value="2018" key="5">2018</option>
                </select>
            </div>
        </form>
    )
}

export default ExpensesFilter;