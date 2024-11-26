import './App.css'
import ExpenseCategoriesList from './screens/ExpenseCategoriesList';
import Incomes from '../src/screens/Incomes'
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import Context from './components/Context';
import IncomeCategoryPage from './components/IncomeCategoryPage';

function App() {

  return (
    <Context>
      <div className='main'>
        <Navbar />
        <Routes>
          <Route path='/' element={ <ExpenseCategoriesList/> }/>
          <Route path='/incomes' element={ <Incomes/> }/>
          <Route path='/expenses/:category' element={ <CategoryPage /> }/>
          <Route path='/incomes/:category' element={ <IncomeCategoryPage /> }/>
        </Routes>
      </div>
    </Context>
  )
}

export default App
