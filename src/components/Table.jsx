import { React, useState } from "react";

// icons
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const TABLE_HEAD = [
  "SI.No:",
  "Category Image",
  "Category Name",
  "Date",
  "Status",
  "Action",
];

const TABLE_ROWS = [
  {
    sNo: 1,
    image:
      "https://imgs.search.brave.com/E4K_0r0d7lQtPIV7Khr-VzHAEI5SA5Drc81CaXufRPY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/MDM2ODcxNS9waG90/by9kdWNrLWxlZy1j/b25maXQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTdRMnc2/RmJRcEpXa1pxR1JE/RjZqZVRRclljX1Yz/SWlVY1JBYzRuU0ZO/WnM9",
    name: "Duck leg confit",
    date: "Wed 3:00pm",
    status: true,
  },
  {
    sNo: 2,
    image:
      "https://imgs.search.brave.com/yDvBWe1cmFQTABs8Jy2V6_9HHj815W64AEBWK1tuUG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/aWctc2FuZHdpY2gt/aGFtYnVyZ2VyLWJ1/cmdlci13aXRoLWJl/ZWYtcmVkLW9uaW9u/LXRvbWF0by1mcmll/ZC1iYWNvbl8yODI5/LTUzOTguanBnP3Np/emU9NjI2JmV4dD1q/cGc",
    name: " big sandwich - hamburger",
    date: "Wed 3:00pm",
    status: false,
  },
];

function Table({categoryItems}) {
  const [status, setStatus] = useState(true);

  const handleCheck = (e) => {
    const checkStatus = e.target.checked;
    console.log(checkStatus);
  };

  return (
    <div className="bg-white rounded-md shadow-xl overflow-hidden overflow-x-scroll">
      <table className="p-2 rounded w-full">
        <tr className="text-sm font-medium  bg-gray-100">
          {TABLE_HEAD.map((head, index) => (
            <th
              key={index}
              className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
            >
              <p
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70 "
              >
                {head}
              </p>
            </th>
          ))}
        </tr>
        <tbody>
          {/* get image form AppContext provider */}
          {categoryItems.getCategory.map(({ sNo, image, name, date, status }, index) => {
            return (
              <tr className="border-b ">
                <td className=" text-center p-3">
                  <p>{index + 1}</p>
                </td>
                <td className="p-2 text-center">
                  <div className="flex justify-center items-center gap-3 p-3">
                    <img
                      src={image}
                      size="md"
                      className="border border-blue-gray-50 bg-gray-100 object-cover rounded-lg  w-14 h-14"
                    />
                  </div>
                </td>
                <td className="text-center">
                  <p
                    variant="small"
                    color="blue-gray"
                    className="text-sm font-medium text-gray-900  p-3"
                  >
                    {name}
                  </p>
                </td>
                <td className="text-center">
                  <p
                    variant="small"
                    color="blue-gray"
                    className="text-sm font-medium text-gray-900  p-3"
                  >
                    {date}
                  </p>
                </td>
                <td className="text-center p-3">
                  <label className="inline-flex  items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      class="sr-only peer"
                      checked={status}
                      onChange={(e) => console.log(e.target.checked)}
                    />
                    <div
                      className={
                        "relative w-11 h-6 bg-red-600 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"
                      }
                    ></div>
                  </label>
                </td>
                <td className="text-center">
                  <div
                    color="blue-gray"
                    className="text-lg font-medium text-gray-900 text-center flex justify-center gap-2 p-3"
                  >
                    <FiEdit className="text-center cursor-pointer" onClick={()=>console.log(categoryItems.getCategory)} />
                    <AiOutlineDelete className="text-center cursor-pointer" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
