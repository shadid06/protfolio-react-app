import React from "react";
import Footer from "../footer_component/Footer";
import MobileFooter from "../footer_component/MobileFooter";
import MobileNavbar from "../navbar_component/MobileNavbar";
import Navbar from "../navbar_component/Navbar";
export default function ContactPage() {
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
        <div className=" my-40 md:mx-48 flex justify-start items-center flex-col">
          <h1 className=" text-buttonText font-bold">
            For any questions please mail me:
          </h1>
          <h4>hasnainbauet@gmail.com</h4>
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
