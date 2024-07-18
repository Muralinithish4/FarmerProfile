import './App.css';
import React, { useState } from 'react';
import FarmerInfo from './components/FarmerInfo';
import FarmerList from './components/FarmerList';
import NavButtons from './components/NavButtons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [farmers, setFarmers] = useState([]);

  const addFarmerToList = (newFarmer) => {
    setFarmers([...farmers, newFarmer]);
  };

  return (
    <Router>
      <div className="App bg-gray-50">
        <NavButtons onAddFarmer={addFarmerToList} />
        <Routes>
          <Route path="/farmers" element={<FarmerList />} />
        <Route path="/farmer-info" element={<FarmerInfo />} />
        <Route path="/" element={<FarmerList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
