import React from "react";
import Footer from "../footer_component/Footer";
import Navbar from "../navbar_component/Navbar";
import MobileNavbar from "../navbar_component/MobileNavbar";
import MobileFooter from "../footer_component/MobileFooter";
export default function ProjectPage() {
  return (
    <div>
      <div className="  mx-14  ">
        <div>
          <div className="hidden lg:block">
            <Navbar />
          </div>
          <div className="block lg:hidden">
            <MobileNavbar />
          </div>
        </div>
        <div className=" my-20 md:mx-48">
          <h1 className=" text-solidHeading text-2xl font-bold mb-3">
            Projects
          </h1>
          <p className=" text-gray text-sm mb-4">Things I’ve built so far</p>
          <div className=" mt-10 md:grid md:grid-cols-3 md:gap-24 grid grid-cols-2 gap-10 ml-6 md:ml-0">
            {/* start card */}
            <div className=" h-64 w-40 md:w-48 shadow-lg rounded-md bg-white flex flex-col">
              <img
                src="/images/wall.jpeg"
                className=" z-0 h-20 w-40 md:w-48 rounded-tl-md rounded-tr-md mb-1"
              />
              <h5 className=" font-medium text-black text-sm mx-2 mb-1">
                Nilambala
              </h5>
              <p className=" text-xs text-black font-normal mx-2 mb-1">
                Ecommerce website using PHP, HTML, CSS. This project contains
                all the featues of an ecommerce website including admin panel.
              </p>
              <div className=" flex flex-row space-x-1 mx-2 mb-1">
                <p className="  text-purple-300 text-[12px] font-normal ">
                  Tech Stack:
                </p>
                <p className=" text-[12px] text-black font-medium mx-2 mb-1">
                  Html, CSS, JS
                </p>
              </div>
              {/* <div className=" flex flex-row justify-between mx-2">
                <div className=" flex flex-row space-x-1">
                  <img src="/images/github.png" className=" h-4 w-4" />
                  <p className=" text-black text-[10px] underline">
                    view source
                  </p>
                </div>
              </div> */}
            </div>
            {/* end card */}
            {/* start card */}
            <div className=" h-64 w-40 md:w-48 shadow-lg rounded-md bg-white flex flex-col">
              <img
                src="/images/wall.jpeg"
                className=" z-0 h-20 w-40 md:w-48 rounded-tl-md rounded-tr-md mb-1"
              />
              <h5 className=" font-medium text-black text-sm mx-2 mb-1">
                Nilambala
              </h5>
              <p className=" text-xs text-black font-normal mx-2 mb-1">
                Ecommerce website using PHP, HTML, CSS
              </p>
              <div className=" flex flex-row space-x-1 mx-2 mb-1">
                <p className="  text-purple-300 text-[12px] font-normal ">
                  Tech Stack:
                </p>
                <p className=" text-[12px] text-black font-medium mx-2 mb-1">
                  Html, CSS, JS
                </p>
              </div>
              <div className=" flex flex-row justify-between mx-2">
                <div className=" flex flex-row space-x-1">
                  <img src="/images/github.png" className=" h-4 w-4" />
                  <p className=" text-black text-[10px] underline">
                    view source
                  </p>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* start card */}
            <div className=" h-64 w-40 md:w-48 shadow-lg rounded-md bg-white flex flex-col">
              <img
                src="/images/wall.jpeg"
                className=" z-0 h-20 w-40 md:w-48 rounded-tl-md rounded-tr-md mb-1"
              />
              <h5 className=" font-medium text-black text-sm mx-2 mb-1">
                Project Tile goes here
              </h5>
              <p className=" text-xs text-black font-normal mx-2 mb-1">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
              <div className=" flex flex-row space-x-1 mx-2 mb-1">
                <p className="  text-purple-300 text-[12px] font-normal ">
                  Tech Stack:
                </p>
                <p className=" text-[12px] text-black font-medium mx-2 mb-1">
                  Html, CSS, JS
                </p>
              </div>
              <div className=" flex flex-row justify-between mx-2">
                <div className=" flex flex-row space-x-1">
                  <img src="/images/github.png" className=" h-4 w-4" />
                  <p className=" text-black text-[10px] underline">
                    view source
                  </p>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* start card */}
            <div className=" h-64 w-40 md:w-48 shadow-lg rounded-md bg-white flex flex-col">
              <img
                src="/images/wall.jpeg"
                className=" z-0 h-20 w-40 md:w-48 rounded-tl-md rounded-tr-md mb-1"
              />
              <h5 className=" font-medium text-black text-sm mx-2 mb-1">
                Project Tile goes here
              </h5>
              <p className=" text-xs text-black font-normal mx-2 mb-1">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
              <div className=" flex flex-row space-x-1 mx-2 mb-1">
                <p className="  text-purple-300 text-[12px] font-normal ">
                  Tech Stack:
                </p>
                <p className=" text-[12px] text-black font-medium mx-2 mb-1">
                  Html, CSS, JS
                </p>
              </div>
              <div className=" flex flex-row justify-between mx-2">
                <div className=" flex flex-row space-x-1">
                  <img src="/images/github.png" className=" h-4 w-4" />
                  <p className=" text-black text-[10px] underline">
                    view source
                  </p>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* start card */}
            <div className=" h-64 w-40 md:w-48 shadow-lg rounded-md bg-white flex flex-col">
              <img
                src="/images/wall.jpeg"
                className=" z-0 h-20 w-40 md:w-48 rounded-tl-md rounded-tr-md mb-1"
              />
              <h5 className=" font-medium text-black text-sm mx-2 mb-1">
                Project Tile goes here
              </h5>
              <p className=" text-xs text-black font-normal mx-2 mb-1">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
              <div className=" flex flex-row space-x-1 mx-2 mb-1">
                <p className="  text-purple-300 text-[12px] font-normal ">
                  Tech Stack:
                </p>
                <p className=" text-[12px] text-black font-medium mx-2 mb-1">
                  Html, CSS, JS
                </p>
              </div>
              <div className=" flex flex-row justify-between mx-2">
                <div className=" flex flex-row space-x-1">
                  <img src="/images/github.png" className=" h-4 w-4" />
                  <p className=" text-black text-[10px] underline">
                    view source
                  </p>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* start card */}
            <div className=" h-64 w-40 md:w-48 shadow-lg rounded-md bg-white flex flex-col">
              <img
                src="/images/wall.jpeg"
                className=" z-0 h-20 w-40 md:w-48 rounded-tl-md rounded-tr-md mb-1"
              />
              <h5 className=" font-medium text-black text-sm mx-2 mb-1">
                Project Tile goes here
              </h5>
              <p className=" text-xs text-black font-normal mx-2 mb-1">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
              <div className=" flex flex-row space-x-1 mx-2 mb-1">
                <p className="  text-purple-300 text-[12px] font-normal ">
                  Tech Stack:
                </p>
                <p className=" text-[12px] text-black font-medium mx-2 mb-1">
                  Html, CSS, JS
                </p>
              </div>
              <div className=" flex flex-row justify-between mx-2">
                <div className=" flex flex-row space-x-1">
                  <img src="/images/github.png" className=" h-4 w-4" />
                  <p className=" text-black text-[10px] underline">
                    view source
                  </p>
                </div>
              </div>
            </div>
            {/* end card */}
          </div>
        </div>
      </div>
      <div>
        <div className=" hidden lg:block">
          <Footer />
        </div>
        <div className=" block lg:hidden">
          <MobileFooter />
        </div>
      </div>
    </div>
  );
}
