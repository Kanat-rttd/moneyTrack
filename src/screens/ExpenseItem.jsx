import './ExpenseItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function ExpenseItem({expense}) {
    const categoryUrl = `/expenses/${expense.category}`;

    return (
        <div className='main_item'>
            <Link to={categoryUrl}>
                <div className="item">
                    <FontAwesomeIcon icon={expense.icon} className='icon'/>
                </div>
                <span>{expense.category}</span>
            </Link>
        </div>
    )
}

export default ExpenseItem;