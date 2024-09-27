import React, { useContext, useState } from "react";

// icons
import { MdSpaceDashboard } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";

// images
import CkLogo from "../assets/images/ck-removebg.png";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

function Sidebar() {
  const { activeNav, handleTab } = useContext(AppContext);

  return (
    <div className="w-72 bg-gradient-to-tl from-yellow-500 to-yellow-300 absolute z-10 h-full hidden lg:block">
      {/* <div className="fixed bg-black h-full w-full -z-50"></div> */}
      <div className="p-5 h-24 flex gap-2 items-center">
        <div>
          <img src={CkLogo} alt="" className="pr-2 h-full w-24" />
        </div>
        <div>
          <p className="text-lg font-bold min-w-max">COUSINS KITCHEN</p>
        </div>
      </div>
      <div className="py-3 px-5">
        <ul>
          <li
           
          >
           <Link to={'/'}>
           <div  className={
              activeNav == 1
                ? "bg-black rounded-lg p-3 mb-3 text-sm font-medium flex justify-between items-center cursor-pointer text-yellow-400"
                : "bg-yellow-100 p-3 rounded-lg text-sm font-medium mb-3 flex justify-between items-center cursor-pointer"
            }
            onClick={() => handleTab(1)}>
           <div className="flex items-center gap-3">
              <MdCategory className="text-lg" />
              Category
            </div>
            <IoIosArrowForward className="text-gray-400" />
           </div>
           </Link>
          </li>

          <li>
            <Link to={'/subcategory'}>
              <div
                className={
                  activeNav == 2
                    ? "bg-black rounded-lg p-3 mb-3 text-sm font-medium flex justify-between items-center cursor-pointer text-yellow-400"
                    : "bg-yellow-100 p-3 rounded-lg text-sm font-medium mb-3 flex justify-between items-center cursor-pointer"
                }
                onClick={() => {
                  handleTab(2);
                }}
              >
                <div className="flex items-center gap-3">
                  <TbCategoryFilled className="text-lg" />
                  Sub-Category
                </div>
                <IoIosArrowForward className="text-gray-400" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
