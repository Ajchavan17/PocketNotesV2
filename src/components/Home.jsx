import React from "react";

import backgroundGraphics from "../assets/backgroundGraphics.svg";
import lockIcon from "../assets/lockIcon.svg";

const Home = ({ setShowSidebar }) => {
  const handleShowSidebar = () => {
    setShowSidebar(true);
  };

  return (
    <div className="bg-homeBody h-full w-full flex flex-col justify-center items-center">
      <img src={backgroundGraphics} alt="" className="h-36 sm:h-80" />
      <h1 className="text-3xl text-black sm:text-5xl">Pocket Notes</h1>
      <p className="mt-2 text-xs sm:text-base">
        Send and receive messages without keeping your phone online.
        <br />
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <button
        className="flex text-black mt-10 sm:hidden md:hidden"
        onClick={handleShowSidebar}
      >
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 ml-1 animate-move"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
      <div className="absolute bottom-2 ">
        <div className="flex">
          <img src={lockIcon} alt="" />
          <p className="ml-1">end-to-end encrypted</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
