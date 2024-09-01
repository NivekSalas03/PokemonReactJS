import './App.css';
import { DatePicker } from 'antd';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import { TablePokemon } from './components/TablePokemon';
import {TableDetails} from './components/TableDetails';

const App =  () => {
  return (
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<TablePokemon/>}/>
      <Route path='/TableDetail/:id?' element={<TableDetails/>}/>
    </Routes>
    </BrowserRouter>   
  );
}

export default App;
