import React from "react";
import { IoIosArrowDown } from "react-icons/io";
 
const CropSelection = () => {
  return (
    <div >
      <div className="flex items-center gap-56 bg-white rounded-md p-2 h-10 m-5 w-80">
<label className="p-2  font-medium" htmlFor="crop">
          Crop
</label>
<IoIosArrowDown />
</div>
      <div className="flex gap-2.5 font-work-sans ml-4">
        <button className="border-none bg-none mr-5 p-2.5 cursor-pointer text-gray-400">Tobacco</button>
      <div className="text-green-500">    
        <button className="relative bg-none mr-5 p-2.5 border-b-2 border-green-500 cursor-pointer text-green-500">
          Chilli
        </button>
      </div>  
        <button className="border-none bg-none mr-5 p-2.5 cursor-pointer text-gray-400">Ginger</button>
      </div>
      <div className="line mb-5 text-gray-200">
      <hr className="m-0 divide-slate-400 mx-4" />
            </div>
      <div>
        <div className="flex rounded-md border-[#f7f3f3] bg-white items-center gap-12 w-[95%] h-20 m-2.5 mb-6 ml-4">
          <div className="flex-row">
            <div className="text-gray-400 m-5 font-work-sans">Field ID</div>
            <div className="m-5 font-medium">KK001</div>
          </div>
          <div className="flex-row">
            <div className="text-gray-400 m-5 font-work-sans ">Field Location</div>
            <div className="m-5  font-sans  font-medium">Grandhasiri</div>
          </div>
        </div>
        <div>
        <hr className="my-2 divide-slate-400 mx-4" />
                </div>
      </div>
    </div>
  );
};
 
export default CropSelection;