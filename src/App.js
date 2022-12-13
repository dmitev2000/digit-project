import './App.css';
import Navbar from './components/layout/navigation/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import MenuPage from './components/pages/MenuPage';
//import Popup from './components/ui/popup/Popup';

function App() {
  return (
    <div className='app'>
      <Navbar />
      {/* <Popup /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
      </Routes>
    </div>
  );
}

export default App;
