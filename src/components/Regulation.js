import React from 'react';
import logo from './pic.png'
const Regulation = () => {
  return (
    <div className="m-2.5 p-2 bg-ghostwrite">
      <h4 className="m-1 font-medium">Regulation</h4>
      <div className="flex gap-5">
        {["#e9eff1", "#faebd770", "#e9eff1", "#faebd770"].map((bgColor, index) => (
          <div key={index} className="bg-gray-100 border p-5 rounded-lg w-96 h-52" style={{ background: bgColor }}>
            <div className="flex items-center gap-28 font-medium">
            <img
              className="h-16 w-16"
              src={logo}
              alt="Regulation"
            />
              <p >ID - 12345</p>
            </div>
            <p className="font-medium mt-8">Global Gap</p>
            <button className="bg-green-500 text-white w-full py-2 mt-2 rounded-md">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regulation;
