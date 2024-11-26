import OverallMoney from "../components/OverallMoney";
import incomes from '../incomes';
import IncomesItem from "./IncomesItem";

function Incomes() {

    function clearAllIncomesHistory() {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('incomesHistory_')) {
                localStorage.removeItem(key);
            }
        });
    }

    return (
        <div className="incomes_main">
            <div className="overall">
                <OverallMoney />
            </div>
            <div className="list">
                {incomes.map((income) => {
                    return (
                        <IncomesItem key={income.id} income={income}/>
                    )
                })}
            </div>
            <button onClick={clearAllIncomesHistory}>Очистить историю</button>
        </div>
    )
}

export default Incomes;