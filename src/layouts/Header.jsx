import React, { useContext } from 'react'

// icons
import { FaUserAlt } from "react-icons/fa";
import { AppContext } from '../context/AppContext';

function Header() {
  const getProduct = useContext(AppContext)
  return (
    <header className='py-5  pr-5 h-24 bg-white shadow-md absolute z-10 w-full lg:pl-72'>
        <div className="navlogos flex gap-5 items-center justify-end px-2">
            <div className='text-right'>
                <p className='text-sm font-medium text-gray-500'>Good Morning !</p>
                <p className='text-lg font-semibold mt-1'>COUSINS KITCHEN</p>
            </div>
            <div className="bg-[#f5d00c] w-12 h-12 rounded-full flex justify-center items-center cursor-pointer" onClick={()=>console.log(getProduct.getCategory)}>
            <FaUserAlt className='text-lg' />
            </div>
        </div>
    </header>
  )
}

export default Header