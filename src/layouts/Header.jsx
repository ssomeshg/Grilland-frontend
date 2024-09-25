import React, { useContext } from "react";

// icons
import { FaUserAlt } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";

// images
import CkLogo from "../assets/images/ck-removebg.png";

function Header() {
  const {handleSidebar} =useContext(AppContext)
  const getProduct = useContext(AppContext);
  return (
    <header className="p-3 md:py-5  md:pr-5 h-24 bg-white shadow-md fixed top-0 md:absolute z-10 w-full lg:pl-72 flex justify-between items-center lg:block">
      <div className="block p-2 lg:hidden" onClick={handleSidebar}>
        <HiOutlineBars3BottomLeft className="text-3xl"  />
      </div>
      <div className="navlogos flex gap-5 items-center justify-end px-2">
        <div className="text-right">
          <p className="text-xs lg:text-sm font-medium text-gray-500">Good Morning !</p>
          <p className="text-base lg:text-lg font-semibold lg:mt-1">COUSINS KITCHEN</p>
        </div>

        <div
          className="bg-[#f5d00c] w-8 h-8 lg:w-12 lg:h-12 rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => console.log(getProduct.getCategory)}
        >
          <img src={CkLogo} alt="" className="h-full w-full object-contain" />
        </div>
      </div>
    </header>
  );
}

export default Header;
