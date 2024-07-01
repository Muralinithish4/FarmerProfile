import React from "react";

const NavButtons = () => {
  const buttons = [
    { label: "Survey", zIndex: 10 },
    { label: "Survey Name", zIndex: 9 },
    { label: "Team", zIndex: 8 },
    { label: "FO", zIndex: 7 },
    { label: "Farmer", zIndex: 6, active: true },
  ];

  return (
    <div className="flex flex-row items-start p-2 m-2 bg-ghostwhite">
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
  );
};

export default NavButtons;
