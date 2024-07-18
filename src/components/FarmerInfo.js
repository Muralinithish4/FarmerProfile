
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from './logo1.png';
import CropSelection from './CropSelection';
import CropMonitoring from './CropMonitoring';
import Regulation from './Regulation';

const FarmerInfo = () => {
  const location = useLocation();
  const farmer = location.state?.farmer;
  const navigate = useNavigate();

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
          <img
            className="w-44 h-44 m-8 rounded-full"
            src={logo}
            alt="Farmer"
          />
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

