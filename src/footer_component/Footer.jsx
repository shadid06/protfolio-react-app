import React from "react";

export default function Footer() {
  return (
    <div className=" mx-14">
      <div className=" mx-48 h-48 justify-center items-center">
        <div className=" flex flex-row space-x-14 justify-end mb-3">
          <p className=" font-normal text-gray text-xs">01883-100632</p>
          <p className=" font-normal text-gray text-xs">
            hasnainbauet@gmail.com
          </p>
          <div className=" flex flex-row space-x-2 ">
            <img src="/images/github.png" className=" h-4 w-4" />
            <img src="/images/github.png" className=" h-4 w-4" />
            <img src="/images/github.png" className=" h-4 w-4" />
          </div>
        </div>
        <div className=" h-[0.5px] bg-lightGray mb-3"></div>
        <div className=" flex flex-row justify-between">
          <div className=" flex flex-row justify-start space-x-8">
            <p className=" font-normal text-gray text-xs">Home</p>
            <p className=" font-normal text-gray text-xs">Work</p>
            <p className=" font-normal text-gray text-xs">Education</p>
            <p className=" font-normal text-gray text-xs">Project</p>
            <p className=" font-normal text-gray text-xs">Contact</p>
          </div>
          <p className=" font-normal text-gray text-xs">
            © shamim hasnain (Flutter and Mern Developer)
          </p>
        </div>
      </div>
    </div>
  );
}
