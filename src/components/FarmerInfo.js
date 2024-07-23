import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import logo from './logo1.png';
import CropSelection from './CropSelection';
import CropMonitoring from './CropMonitoring';
import Regulation from './Regulation';

const FarmerInfo = () => {
  const location = useLocation();
  const farmer = location.state?.farmer;
  const navigate = useNavigate();

  const [profilePicture, setProfilePicture] = useState(logo);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!farmer) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex items-center bg-gray-100 p-5 rounded-lg mx-4 mb-10 mt-5 ml-3.5 mr-50 h-52 w-[80%]">
        <IoIosArrowBack
          className="w-8 h-8 bg-white text-green-500 rounded-md"
          onClick={() => navigate(-1)}
        />
        <div className="flex flex-row gap-10 items-center">
          <div className="relative">
            <img
              className="w-44 h-44 m-8 rounded-full"
              src={profilePicture}
              alt="Farmer"
            />
            <input
              type="file"
              accept="image/*"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageUpload}
            />
            <MdEdit
              className="absolute bottom-9 right-10 w-8 h-8 bg-white text-green-500 rounded-full p-1 cursor-pointer"
              onClick={() => document.querySelector('input[type="file"]').click()}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-64 mb-5">
              <div className='w-36'>
                <div className="text-gray-500">Name</div>
                <div className="font-medium">{farmer.name}</div>
              </div>
              <div>
                <div className="text-gray-500">ID</div>
                <div className="font-medium">{farmer.id}</div>
              </div>
            </div>
            <div className="flex flex-row gap-64">
              <div className='w-36'>
                <div className="text-gray-500">Phone number</div>
                <div className="font-medium">{farmer.phoneNumber}</div>
              </div>
              <div>
                <div className="text-gray-500">Farmer Location</div>
                <div className="font-medium">{farmer.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CropSelection />
      <CropMonitoring />
      <Regulation />
    </>
  );
};

export default FarmerInfo;
