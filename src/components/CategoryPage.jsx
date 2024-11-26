import './CategoryPage.css';
import OverallMoney from './OverallMoney';
import { Link, useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { MoneyContext } from './Context';

function CategoryPage() {
    const {category} = useParams();

    const [history, setHistory] = useState(() => {
        const savedHistory = localStorage.getItem(`expensesHistory_${category}`);
        return savedHistory ? JSON.parse(savedHistory) : [];
    })

    const {setExpenses, setOverall} = useContext(MoneyContext);
    const [inputValue, setInputValue] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    const handleExpenses = () => {
       setExpenses(prev => prev + Number(inputValue))
    };

    const handleOverall = () => {
        handleExpenses();
        setOverall(prev => prev - Number(inputValue));

        const newHistoryItem = { description: descriptionInput, amount: inputValue };
        const updatedHistory = [...history, newHistoryItem];

        setHistory(updatedHistory);
        localStorage.setItem(`expensesHistory_${category}`, JSON.stringify(updatedHistory));

        setInputValue('');
        setDescriptionInput('');
    }

    useEffect(() => {
        localStorage.setItem(`expensesHistory_${category}`, JSON.stringify(history));
    }, [history]);

    return (
        <div className='to_fit_overall'>
            <OverallMoney />
            <div className='main_category_page'>
                <div className='category_page'>
                    <h1>Траты: {category}</h1>
                    <div className='expenses_form'>
                        <input
                            type="number" 
                            name="expense" 
                            placeholder='Внесите сумму' 
                            className='expense_input'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <input 
                            type="text"
                            name='description'
                            placeholder='Описание'
                            className='expense_input'
                            value={descriptionInput}
                            onChange={(e) => setDescriptionInput(e.target.value)}
                        />
                        {/* <p>{inputValue && `${inputValue} $`}</p> */}
                        <div className='buttons'>
                            <button onClick={handleOverall}>Внести</button>
                            <button><Link to='/expenses'>Сохранить</Link></button>
                        </div>
                    </div>
                </div>
                <div className={history.length < 5 ? "expenses_history_blank" : "expenses_history_blank_scroll"}>
                    <h2>History - {category}</h2>
                    <div className='expenses_history'>
                        {history.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p className='history_p'>{index+1}. {item.description} - {item.amount} ₸</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage;
