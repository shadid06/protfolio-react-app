import React from "react";

export default function Footer() {
  return (
    <div className=" mx-48 h-48 justify-center items-center">
      <div className=" flex flex-row space-x-14 justify-end mb-3">
        <p className=" font-normal text-gray-400 text-xs">01883-100632</p>
        <p className=" font-normal text-gray-400 text-xs">
          hasnainbauet@gmail.com
        </p>
        <div className=" flex flex-row space-x-2 ">
          <img src="/images/github.png" className=" h-4 w-4" />
          <img src="/images/github.png" className=" h-4 w-4" />
          <img src="/images/github.png" className=" h-4 w-4" />
        </div>
      </div>
      <div className=" h-[0.5px] bg-gray-400 mb-3"></div>
      <div className=" flex flex-row justify-between">
        <div className=" flex flex-row justify-start space-x-8">
          <p className=" font-normal text-gray-400 text-xs">Home</p>
          <p className=" font-normal text-gray-400 text-xs">Work</p>
          <p className=" font-normal text-gray-400 text-xs">Education</p>
          <p className=" font-normal text-gray-400 text-xs">Project</p>
          <p className=" font-normal text-gray-400 text-xs">Contact</p>
        </div>
        <p className=" font-normal text-gray-400 text-xs">
          © shamim hasnain (Flutter and Mern Developer)
        </p>
      </div>
    </div>
  );
}
