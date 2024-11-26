import './IncomesItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function IncomesItem({income}) {
    const categoryUrl = `/incomes/${income.category}`;

    return (
        <div className='main_item'>
            <Link to={categoryUrl}>
                <div className="item">
                    <FontAwesomeIcon icon={income.icon} className='icon'/>
                </div>
                <span>{income.category}</span>
            </Link>
        </div>
    )
}

export default IncomesItem;