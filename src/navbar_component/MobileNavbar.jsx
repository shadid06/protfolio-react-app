import React from "react";
import { useState } from "react";

export default function MobileNavbar() {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow((current) => !current);
  };
  return (
    <div>
      <div className=" flex flex-row justify-end my-2">
        <button onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
      <div>
        {show ? (
          <div className=" flex flex-col justify-start shadow-lg rounded-md p-2">
            <div className="  h-8  items-center hover:bg-buttonSuccess rounded-md mb-1">
              <p className="text-gray ml-6 text-sm mt-1">Home</p>
            </div>
            <div className="  h-8 items-center hover:bg-buttonSuccess rounded-md mb-1">
              <p className="text-gray ml-6 text-sm mt-1">Work</p>
            </div>
            <div className="  h-8 items-center hover:bg-buttonSuccess rounded-md mb-1">
              <p className="text-gray ml-6 text-sm mt-1">Education</p>
            </div>
            <div className="  h-8 items-center hover:bg-buttonSuccess rounded-md mb-1">
              <p className="text-gray ml-6 text-sm mt-1">Contact</p>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
