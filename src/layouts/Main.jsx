import React, { useState } from "react";

// icons
import { IoSearch } from "react-icons/io5";
import Table from "../components/Table";
import ButtonComp from "../components/ButtonComp";
import FormComp from "../components/FormComp";
import { FaPlus } from "react-icons/fa";

function Main() {
  const [formModal, setFormModal] = useState(false);

  const handleModal = () => {
    setFormModal(true)
  };
  return (
    <div className="pt-24 ml-[18rem] min-h-[100vh] relative">
      <div className="px-10 py-5">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-2xl">Category</p>
          </div>
          <div className="flex bg-yellow-400 max-w-min rounded-md">
            <input
              type="search"
              className="border border-yellow-400 rounded-md focus:outline-none text-sm  p-2"
              placeholder="Serach Here !!"
            />
            <div className="bg-yellow-400 flex justify-between items-center p-2 rounded-md">
              <IoSearch />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <ButtonComp
            icon={<FaPlus />}
            buttonName={"Add Category"}
            events={() => {
              handleModal();
            }}
          />
          <Table />
        </div>
      </div>
      {
        formModal?<FormComp formModal={formModal} setFormModal={setFormModal}/>:""
      }
    </div>
  );
}

export default Main;
