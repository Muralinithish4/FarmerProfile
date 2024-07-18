import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Stages from './Stages';

const CropMonitoring = () => {
  return (
    <div className="font-work-sans text-lg m-2">
      <p className="m-2 ml-2.5 font-medium">Crop Monitoring</p>
      <div className="grid grid-cols-4 gap-4 p-2">
        {Stages.map((stage, index) => (
          <div key={index} className="bg-white w-72 h-48 border rounded-md p-4">
            <div className="mb-4">
              <div className="flex items-center gap-40 mb-4">
                <div>{stage.stage}</div>
                <div className={`flex justify-center items-center w-5 h-5 rounded-full ${stage.outerColor}`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${stage.innerColor}`}></div>
                </div>
              </div>
              <p className="font-work-sans text-lg font-medium">{stage.description}</p>
              <div className="flex items-center justify-between pt-12">
                <div className='items-center '>No. of steps - {stage.steps}</div>
                <div className=" mr-5 flex items-center text-green-500">
                  <a href="./" className="underline">View</a>
                  <FaArrowRight className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropMonitoring;
