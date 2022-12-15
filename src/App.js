
import './App.css';
import { Routes, Route} from 'react-router-dom';

import Header from './pages/Header'
import Inicio from './pages/Inicio';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto'
import TodoList from './components/todo/TodoList';
import Calendario from './components/calendar/Calendario';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/acerca' element={<Acerca />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/todolist' element={<TodoList />} />
        <Route path='/calendario' element={<Calendario/>} />
      </Routes>
    </div>

  );
}

export default App;
