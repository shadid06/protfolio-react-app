import React from "react";

export default function MobileFooter() {
  return (
    <div className=" h-44 bg-buttonSuccess">
      <div className=" mx-14 flex flex-col space-y-2 py-6">
        <div className=" flex flex-row  justify-evenly mb-3">
          <p className=" font-semibold text-gray text-xs">01883-100632</p>
          <p className=" font-semibold text-gray text-xs">
            hasnainbauet@gmail.com
          </p>
          <div className=" flex flex-row space-x-2 ">
            <img src="/images/github.png" className=" h-4 w-4" />
            <img src="/images/github.png" className=" h-4 w-4" />
            <img src="/images/github.png" className=" h-4 w-4" />
          </div>
        </div>
        <div className="flex flex-row  justify-evenly mb-3 items-center">
          <p className=" font-semibold text-gray text-xs">Home</p>
          <p className=" font-semibold text-gray text-xs">Work</p>
          <p className=" font-semibold text-gray text-xs">Education</p>
          <p className=" font-semibold text-gray text-xs">Project</p>
          <p className=" font-semibold text-gray text-xs ">Contact</p>
        </div>
        <div className=" flex justify-center items-center ">
          <p className="  text-gray text-xs mt-3 font-semibold">
            © shamim hasnain (Flutter and Mern Developer)
          </p>
        </div>
      </div>
    </div>
  );
}
