import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddFarmer = ({ onClose, onAddFarmer, onUpdateFarmer, farmer }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (farmer) {
      setName(farmer.name);
      setPhoneNumber(farmer.phoneNumber);
      setLocation(farmer.location);
    }
  }, [farmer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const farmerData = { name, phoneNumber, location };

    if (farmer) {
      axios.put(`http://localhost:8000/api/farmers/${farmer.id}`, farmerData)
        .then((res) => {
          onUpdateFarmer(res.data);
          onClose();
          navigate('/farmers');
        })
        .catch(error => {
          console.error('There was an error updating the farmer!', error);
        });
    } else {
      axios.post('http://localhost:8000/api/farmers', farmerData)
        .then((res) => {
          onAddFarmer(res.data); // Assuming res.data contains the new farmer object
          onClose();
          navigate('/farmers'); // Navigate to FarmerList page
        })
        .catch(error => {
          console.error('There was an error adding the farmer!', error);
        });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{farmer ? 'Edit Farmer' : 'Add Farmer'}</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border p-2 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-md"
          required
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded-md">
          {farmer ? 'Update Farmer' : 'Add Farmer'}
        </button>
      </form>
    </div>
  );
};

export default AddFarmer;
