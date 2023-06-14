import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from '../src/components/Landing/Landing';
import Home from './components/Home/Home';
import GameDetail from './components/GameDetail/GameDetail';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/videogames/:idVideogame' element={<GameDetail />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
