import React from "react";

const Sidebar = ({
  setShowSidebar,
  setShowGroupPopup,
  groups,
  setSelectedGroup,
}) => {
  const handleShowSidebar = () => {
    setShowSidebar(false);
  };

  const handleShowGroupPopup = () => {
    setShowGroupPopup(true);
  };

  const handleOnClick = (group) => {
    setSelectedGroup(group);
    setShowSidebar(false);
  };

  return (
    <div className="bg-white max-h-screen h-full w-full">
      <div className=" h-1/10 flex items-center">
        <h1 className="font-bold text-2xl ml-5 font-roboto  md:text-2xl lg:text-3xl">
          Pocket Notes
        </h1>
      </div>
      <div className=" h-1/10 flex items-center sm:justify-center md:justify-center">
        <button
          className="h-12 w-80 bg-black ml-5 text-white text-xl rounded-full "
          onClick={handleShowGroupPopup}
        >
          + Create Notes Group
        </button>
      </div>
      <div className="flex flex-col mt-5 ml-10 space-y-5">
        {groups.map((group, index) => (
          <div className="flex items-center space-x-2" key={index}>
            <span
              className={`h-12 w-12 bg-${group.color} rounded-full flex justify-center items-center text-white text-xl`}
            >
              {
                //first 2 chars of groupName to upper case
                group.name.substring(0, 2).toUpperCase()
              }
            </span>

            <h1
              className="font-semibold text-lg font-roboto  md:text-xl lg:text-2xl"
              onClick={() => handleOnClick(group)}
            >
              {group.name}
            </h1>
          </div>
        ))}
      </div>
      {/* <button
        className="border-2 p-3 ml-20 mt-20 border-white rounded-xl bg-black text-white font-bold sm:hidde md:hidden"
        onClick={handleShowSidebar}
      >
        Hide Sidebar
      </button> */}
    </div>
  );
};

export default Sidebar;
