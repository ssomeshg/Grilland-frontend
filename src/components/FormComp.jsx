import React, { useState } from "react";

// icons
import { FaFileCirclePlus } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import ButtonComp from "./ButtonComp";

function FormComp({setFormModal,formModal}) {

    const handleModalClose = ()=>{
        setFormModal(false)
    }
   
  return (
    <div>
      <div className="bg-black opacity-20 w-full h-full fixed top-0 left-0 z-20"></div>
      <div className="fixed bg-white shadow-xl rounded-md p-4 border border-yellow-400  min-w-96 m-auto z-30 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]">
        <div className="flex justify-between items-center py-3 mb-5">
          <p className="text-lg font-semibold">Add Category</p>
          <div onClick={()=>handleModalClose()}>
            <RiCloseFill className="text-3xl font-semibold" />
          </div>
        </div>
        <form action="" method="post">
          <div>
            <div className="px-16 py-5 bg-gray-100 max-w-min w-full m-auto border-2 rounded-2xl border-dashed mb-3 relative">
              <label
                htmlFor="fileUpload"
                className="grid gap-3 justify-items-center"
              >
                <FaFileCirclePlus className="text-gray-400 text-4xl" />
                <p className="min-w-max font-medium text-gray-400">
                  Upload Image
                </p>
              </label>
              <input
                type="file"
                name="fileUpload"
                id="fileUpload"
                className="hidden"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden hidden">
                <img
                  className="w-full h-full object-cover opacity-40"
                  src="https://imgs.search.brave.com/yDvBWe1cmFQTABs8Jy2V6_9HHj815W64AEBWK1tuUG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/aWctc2FuZHdpY2gt/aGFtYnVyZ2VyLWJ1/cmdlci13aXRoLWJl/ZWYtcmVkLW9uaW9u/LXRvbWF0by1mcmll/ZC1iYWNvbl8yODI5/LTUzOTguanBnP3Np/emU9NjI2JmV4dD1q/cGc"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="" className="text-sm font-medium ">Category Name</label>
            <input type="text" placeholder="category Name" className="mt-1 w-full border-yellow-300 border rounded-md p-3 text-sm focus:outline-none focus:border focus:border-yellow-500 placeholder:text-gray-200" />
          </div>

          <ButtonComp buttonName={"Add Item"} events={()=>alert("Add Button Clicked")}/>
        </form>
      </div>
    </div>
  );
}

export default FormComp;
