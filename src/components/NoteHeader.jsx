import React from "react";
import backArrow from "../assets/backArrow.svg";

const NoteHeader = ({
  setShowSidebar,
  selectedGroup,
  setSelectedGroup,
  selectedGroupColor,
}) => {
  const handleShowSidebar = () => {
    setShowSidebar(true);
    setSelectedGroup(null);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className=" text-white font-bold sm:hidden md:hidden"
        onClick={handleShowSidebar}
      >
        <img
          className="cursor-pointer h-5 w-8 "
          src={backArrow}
          alt="back arrow"
        />
      </button>

      <span
        className={`h-12 w-12 bg-${selectedGroup.color} rounded-full flex justify-center items-center text-white text-xl`}
      >
        {selectedGroup.name.substring(0, 2).toUpperCase()}
      </span>

      <h1 className="font-semibold text-lg font-roboto  md:text-2xl lg:text-3xl">
        {selectedGroup.name}
      </h1>
    </div>
  );
};

export default NoteHeader;
