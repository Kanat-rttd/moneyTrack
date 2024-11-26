import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Expenses</Link></li>
                    <li><Link to="/incomes">Incomes</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;