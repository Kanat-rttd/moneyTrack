import {useState, createContext, useEffect} from 'react';

export const MoneyContext = createContext();

function Context ({children}) {
    const getStoredValue = (key, defaultValue) => {
        const saved = localStorage.getItem(key);
        try {
            // Проверяем если данные существуют и не равны "undefined"
            return saved && saved !== "undefined" ? JSON.parse(saved) : defaultValue;
        } catch (error) {
            console.error(`Error parsing localStorage item "${key}":`, error);
            return defaultValue;
        }
    };

    const [overall, setOverall] = useState(() => {
        return localStorage.getItem('overall') ? Number(localStorage.getItem('overall')) : 0;
    });
    const [expenses, setExpenses] = useState(() => {
        return localStorage.getItem('expenses') ? Number(localStorage.getItem('expenses')) : 0;
    });
    const [incomes, setIncomes] = useState(() => {
        return localStorage.getItem('incomes') ? Number(localStorage.getItem('incomes')) : 0;
    });

    useEffect(() => {
        localStorage.setItem('overall', JSON.stringify(overall));
    }, [overall]);

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    useEffect(() => {
        localStorage.setItem('incomes', JSON.stringify(incomes));
    }, [incomes]);

    return (
        <MoneyContext.Provider value={{overall, expenses,  incomes, setOverall, setExpenses, setIncomes}}>
            {children}
        </MoneyContext.Provider>
    )
}

export default Context;