import React, { useState } from "react";

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
function TableSubcategory({ getSubcategory }) {
  const [status, setStatus] = useState(null);

  const handleCheck = (e) => {
    const checkStatus = e.target.checked;
    console.log(checkStatus);
  };

  const handleEditSubcategory = (indexValue) => {
    indexValue
  };
  return (
    <div className="bg-white rounded-md shadow-xl overflow-hidden overflow-x-scroll">
      <table className="p-2 rounded w-full">
        <thead className="text-sm font-medium  bg-gray-100">
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
        </thead>
        <tbody>
          {/* get image form AppContext provider */}
          {getSubcategory.map(
            ({ subcategoryName, subcategoryImage, date, status }, index) => {
              return (
                <tr key={index} className="border-b ">
                  <td className=" text-center p-3">
                    <p>{index + 1}</p>
                  </td>
                  <td className="p-2 text-center">
                    <div className="flex justify-center items-center gap-3 p-3">
                      <img
                        src={subcategoryImage}
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
                      {subcategoryName}
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
                        className="sr-only peer"
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
                      <FiEdit
                        className="text-center cursor-pointer"
                        onClick={() => handleEditSubcategory(index)}
                      />
                      <AiOutlineDelete className="text-center cursor-pointer" />
                    </div>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableSubcategory;
