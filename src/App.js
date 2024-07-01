import './App.css';
import CropMonitoring from './components/CropMonitoring';
import CropSelection from './components/CropSelection';
import FarmerInfo from './components/FarmerInfo';
import NavButtons from './components/NavButtons';
import Regulation from './components/Regulation';


function App() {
  return (
    <div className="App bg-gray-50">
      <NavButtons/>
      <FarmerInfo/>
      <CropSelection/>
      <CropMonitoring/>
      <Regulation/>
    </div>
  );
}

export default App;
