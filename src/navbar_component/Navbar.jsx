import React from "react";

export default function Navbar() {
  return (
    <div className=" h-20 mx-48 flex justify-end items-center">
      <div className=" flex flex-row space-x-8 justify-end">
        <p className=" font-medium text-gray-400">Home</p>
        <p className=" font-medium text-gray-400">Work</p>
        <p className=" font-medium text-gray-400">Education</p>
        <p className=" font-medium text-gray-400">Projects</p>
        <p className=" font-medium text-gray-400">Contact</p>
        <div className=" flex flex-row space-x-2 mt-1">
          <img src="/images/github.png" className=" h-4 w-4" />
          <img src="/images/github.png" className=" h-4 w-4" />
          <img src="/images/github.png" className=" h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
