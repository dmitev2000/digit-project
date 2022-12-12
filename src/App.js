import './App.css';
import Navbar from './components/layout/navigation/Navbar';
import BestSellers from './components/ui/BestSellers';
import Intro from './components/ui/Intro';
import LocationsBtn from './components/ui/LocationsBtn';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Intro />
      <BestSellers />
      <LocationsBtn />
    </div>
  );
}

export default App;
