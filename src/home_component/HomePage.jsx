import React from "react";
import Footer from "../footer_component/Footer";
import MobileNavbar from "../navbar_component/MobileNavbar";
import Navbar from "../navbar_component/Navbar";
import MobileFooter from "../footer_component/MobileFooter";
export default function HomePage() {
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
        {/* start section 1 */}
        <div className=" flex flex-row md:flex md:flex-row md:justify-between md:mx-48 my-32">
          <div className=" flex flex-col justify-start">
            <p className=" text-2xl  text-solidHeading font-bold">Hi,</p>
            <p className=" text-2xl  text-solidHeading font-bold">My name is</p>
            <p className="text-2xl text-buttonText font-bold">Shamim Hasnain</p>
            <p className=" text-2xl  text-solidHeading font-bold">
              FLUTTER and MERN Developer
            </p>
          </div>
          {/* end text */}
          <div>
            <img
              src="/images/myimage.jpg"
              className=" md:h-32 md:w-32 h-40 w-40  border-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500   p-1"
            />
          </div>
          {/* end image */}
        </div>

        {/* end section 1 */}

        {/* start section 2 */}

        <div className="md:mx-48 mb-20">
          <h4 className=" flex justify-center items-center text-solidHeading font-bold text-2xl mb-1">
            My Tech Stack
          </h4>
          <p className=" flex justify-center items-center text-gray text-sm">
            Technologies I’ve been working with recently
          </p>
          <div className="mt-10 md:grid md:grid-cols-6 md:gap-20 grid grid-cols-3 gap-10 md:ml-0 ml-6">
            <img src="/images/flutter.png" className=" h-16 w-16" />
            <img src="/images/dart.png" className=" h-16 w-16" />
            <img src="/images/html.png" className=" h-16 w-16" />
            <img src="/images/tailwind.png" className=" h-16 w-16" />
            <img src="/images/js.png" className=" h-16 w-16" />
            <img src="/images/react.png" className=" h-16 w-16" />
            <img src="/images/node.png" className=" h-16 w-16" />
            <img src="/images/mon.png" className=" h-16 w-16" />
            <img src="/images/mysql.png" className=" h-16 w-16" />
            <img src="/images/lv.png" className=" h-16 w-16" />
            <img src="/images/github.png" className=" h-16 w-16" />
            <img src="/images/gitbash.png" className=" h-16 w-16" />
          </div>
        </div>

        {/* end section 2 */}

        {/* start section 3 */}
        <div className="md:mx-48 mb-20">
          <h4 className=" flex justify-center items-center text-solidHeading font-bold text-2xl mb-1">
            Projects
          </h4>
          <p className=" flex justify-center items-center text-gray text-sm">
            Things I’ve built so far
          </p>
          <div className=" mt-10 md:grid md:grid-cols-3 md:gap-24 grid grid-cols-2 gap-10 ml-6 md:ml-0">
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
        {/* end section 3 */}
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
