
import './App.css';
import { Routes, Route} from 'react-router-dom';

import Header from './pages/Header'
import Inicio from './pages/Inicio';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto'
import Todo from './components/todo/Todo';
import Calendario from './components/calendar/Calendario';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/acerca' element={<Acerca />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/calendario' element={<Calendario/>} />
      </Routes>
    </div>

  );
}

export default App;
