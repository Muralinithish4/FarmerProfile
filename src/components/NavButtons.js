import React, { useState } from 'react';
import { IoMdPersonAdd } from 'react-icons/io';
import AddFarmer from './AddFarmer';

const NavButtons = ({ onAddFarmer }) => {
  const buttons = [
    { label: "Survey", zIndex: 10 },
    { label: "Survey Name", zIndex: 9 },
    { label: "Team", zIndex: 8 },
    { label: "FO", zIndex: 7 },
    { label: "Farmer", zIndex: 6, active: true },
  ];

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div className="flex justify-between items-center mr-4">
      <div className="flex flex-row items-start p-2 m-2 bg-ghostwrite">
        {buttons.map((button, index) => (
          <button
            key={index}
            style={{ zIndex: button.zIndex }}
            className={`shadow-md rounded-md px-5 py-2 text-base ${button.active ? "bg-green-100 border-green-300 text-green-700" : "bg-white border-gray-300"} -ml-1`}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="ml-96">
        <button onClick={openAddModal} className="bg-green-500 flex items-center gap-2 text-white p-2 rounded-md">
          <IoMdPersonAdd /> Add
        </button>
      </div>
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <button onClick={closeAddModal} className="text-red-500 mb-4">Close</button>
            <AddFarmer onClose={closeAddModal} onAddFarmer={onAddFarmer} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavButtons;
