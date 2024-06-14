import React, { useEffect, useRef } from "react";

const GroupPopup = ({ setShowGroupPopup, addGroup }) => {
  const GroupColors = [
    "red-500",
    "blue-500",
    "green-500",
    "yellow-500",
    "purple-500",
    "orange-500",
  ];
  const [groupName, setGroupName] = React.useState("");
  const [groupColor, setGroupColor] = React.useState(GroupColors[0]);
  const popupRef = useRef(null);

  const handleShowGroupPopup = () => {
    setShowGroupPopup(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowGroupPopup(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [setShowGroupPopup]);

  const handleAddGroup = () => {
    addGroup({ name: groupName, color: groupColor });
    setGroupName("");
    setShowGroupPopup(false);
  };

  return (
    <div
      ref={popupRef}
      className="relative  bg-white h-211 w-284 flex flex-col rounded-lg sm:h-317 sm:w-740"
    >
      <div className="p-5 sm:p-10">
        <h1 className="font-bold sm:text-3xl">Create New Notes Group</h1>
      </div>
      <div className="pl-5 sm:pl-12 flex items-center">
        <h2 className="font-semibold text-sm sm:text-3xl">Group Name</h2>
        <input
          className="border-2 h-9 border-black text-sm p-1 w-2/10 ml-1 rounded-full sm:h-12 sm:w-2/4 sm:ml-3 sm:text-xl sm:p-2"
          type="text"
          placeholder="Enter Group Name..."
          value={groupName}
          onChange={(event) => setGroupName(event.target.value)}
        />
      </div>
      <div className="pl-5 sm:pl-12 flex items-center mt-7">
        <h2 className="font-semibold text-sm sm:text-3xl">Choose Color</h2>

        {GroupColors.map((color) => {
          return (
            <span
              className={`ml-1 h-6 w-6 rounded-full hover:border-2 hover:border-black bg-${color} ${
                groupColor === color ? "border-2 border-black" : ""
              } sm:h-10 sm:w-10 sm:ml-3`}
              key={color}
              onClick={() => setGroupColor(color)}
            />
          );
        })}
      </div>
      <div>
        <button
          className={`absolute text-lg bottom-3 right-5 h-8 w-20 rounded-lg text-white bg-black sm:right-14 sm:h-10 sm:w-28 ${
            groupName ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={handleAddGroup}
          disabled={!groupName}
        >
          Create
        </button>
      </div>
      <span className="hidden bg-red-500 bg-green-500 bg-blue-500 bg-yellow-500 bg-purple-500 bg-orange-500" />
    </div>
  );
};

export default GroupPopup;
