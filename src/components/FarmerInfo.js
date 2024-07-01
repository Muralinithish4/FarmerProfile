import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import logo from './logo1.png'
const FarmerInfo = () => {
  return (
      <div className="flex items-center bg-gray-100 p-5 rounded-lg mx-4 mb-10 mt-5 ml-3.5 mr-50 h-52 w-[80%]">    
      <IoIosArrowBack className="w-8 h-8 bg-white text-green-500 rounded-md " />
            <div className="flex flex-row gap-10 items-center">
        {/* <img className="w-32 h-32 rounded-full bg-cover" alt=" " /> */}
        <img
          className="w-44 h-44 m-8 rounded-full"
          src={logo}
          alt="Farmer"
        />
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-64 mb-5">
            <div >
              <div className="text-gray-500 ">Name</div>
              <div className="font-medium">Bhuvesh Kumar</div>
            </div>
            <div>
              <div className="text-gray-500">ID</div>
              <div className="font-medium">123492</div>
            </div>
          </div>
          <div className="flex flex-row gap-64">
            <div>
              <div className="text-gray-500">Phone number</div>
              <div className="font-medium">+919534289188</div>
            </div>
            <div>
              <div className="text-gray-500">Farmer Location</div>
              <div className="font-medium">Guntur</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmerInfo;
