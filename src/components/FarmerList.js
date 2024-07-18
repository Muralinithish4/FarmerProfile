

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdCreate, IoMdEye, IoMdTrash } from 'react-icons/io';
import AddFarmer from './AddFarmer';
import { useNavigate } from 'react-router-dom';

const FarmerList = () => {
  const [farmers, setFarmers] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentFarmer, setCurrentFarmer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/farmers')
      .then((res) => {
        setFarmers(res.data);
      })
      .catch(error => {
        console.error('There was an error fetching the farmer data!', error);
      });
  }, []);

  const addFarmerToList = (newFarmer) => {
    setFarmers([...farmers, newFarmer]);
  };

  const updateFarmerInList = (updatedFarmer) => {
    setFarmers(farmers.map(farmer => (farmer.id === updatedFarmer.id ? updatedFarmer : farmer)));
  };

  const deleteFarmer = (id) => {
    axios.delete(`http://localhost:8000/api/farmers/${id}`)
      .then(() => {
        setFarmers(farmers.filter(farmer => farmer.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the farmer!', error);
      });
  };

  const viewFarmer = (farmer) => {
    navigate('/farmer-info', { state: { farmer } });
  };

  const openEditModal = (farmer) => {
    setCurrentFarmer(farmer);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentFarmer(null);
  };

  return (
    <>
      <div className="my-4">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/12 text-left px-4 py-2">S.No</th>
              <th className="w-3/12 text-left px-4 py-2">Name</th>
              <th className="w-3/12 text-left px-4 py-2">Phone Number</th>
              <th className="w-3/12 text-left px-4 py-2">Location</th>
              <th className="w-2/12 text-left px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {farmers.map((farmer, index) => (
              <tr key={farmer.id}>
                <td className="text-left py-2 px-4">{index + 1}</td>
                <td className="text-left py-2 px-4">{farmer.name}</td>
                <td className="text-left py-2 px-4">{farmer.phoneNumber}</td>
                <td className="text-left py-2 px-4">{farmer.location}</td>
                <td className="text-left py-2 px-4 flex gap-2">
                  <button onClick={() => openEditModal(farmer)} className="text-blue-500">
                    <IoMdCreate />
                  </button>
                  <button onClick={() => deleteFarmer(farmer.id)} className="text-red-500">
                    <IoMdTrash />
                  </button>
                  <button onClick={() => viewFarmer(farmer)} className="text-green-500">
                    <IoMdEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isEditModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg">
              <button onClick={closeEditModal} className="text-red-500 mb-4">Close</button>
              <AddFarmer
                farmer={currentFarmer}
                onClose={closeEditModal}
                onAddFarmer={addFarmerToList}
                onUpdateFarmer={updateFarmerInList}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FarmerList;
