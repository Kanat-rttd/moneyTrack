import './OverallMoney.css'
import { useContext } from "react";
import { MoneyContext } from './Context';

function OverallMoney() {
    const {overall, expenses, incomes, setOverall, setExpenses, setIncomes} = useContext(MoneyContext);

    const resetValues = () => {
        setOverall(0);
        setExpenses(0);
        setIncomes(0);
        localStorage.setItem('overall', 0);
        localStorage.setItem('expenses', 0);
        localStorage.setItem('incomes', 0);
    };

    return(
        <div className="overall_money_main">
            <h2>Overall: ₸ {overall}</h2>
            <h3 className="expenses">Expenses: ₸ {expenses}</h3>
            <h3 className="incomes">Incomes: ₸ {incomes}</h3>
            <button onClick={resetValues}>Сбросить все значения</button>
        </div>
    )
}

export default OverallMoney;