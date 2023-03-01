import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" h-20 mx-48 flex justify-end items-center">
      <div className=" flex flex-row space-x-8 justify-end">
        <Link to="/">
          <p className=" font-medium text-gray">Home</p>
        </Link>
        <Link to="/work">
          <p className=" font-medium text-gray">Work</p>
        </Link>
        <Link to="/education">
          <p className=" font-medium text-gray">Education</p>
        </Link>
        <Link to="/project">
          <p className=" font-medium text-gray">Projects</p>
        </Link>
        <Link to="/contact">
          <p className=" font-medium text-gray">Contact</p>
        </Link>
        <div className=" flex flex-row space-x-2 mt-1">
          <img src="/images/github.png" className=" h-4 w-4" />
          <img src="/images/github.png" className=" h-4 w-4" />
          <img src="/images/github.png" className=" h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
