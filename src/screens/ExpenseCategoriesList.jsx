import './ExpenseCategoriesList.css';
import expenses from '../expenses';
import ExpenseItem from './ExpenseItem';
import OverallMoney from '../components/OverallMoney';

function ExpenseCategoriesList() {

    function clearAllExpensesHistory() {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('expensesHistory_')) {
                localStorage.removeItem(key);
            }
        });
    }

    return (
        <div className='expenses_main'>
            <div className='overall'>
                <OverallMoney />
            </div>
            <div className='list'>
                {expenses.map((expense) => (
                    <ExpenseItem key={expense.id} expense={expense}/>
                ))}
            </div>
            <button onClick={clearAllExpensesHistory}>Очистить историю</button>
        </div>
    );
}

export default ExpenseCategoriesList;