import React, { useContext, useState } from "react";

// icons
import { IoSearch } from "react-icons/io5";
import Table from "../components/Table";
import ButtonComp from "../components/ButtonComp";
import FormComp from "../components/FormComp";
import { FaPlus } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

function Category() {
  //get data from context provider
  const {getCategory} = useContext(AppContext);


  const [formModal, setFormModal] = useState(false);

  const handleModal = () => {
    setFormModal(true);
  };
  
  return (
    <>
      <div className="bg-white relative">
        <div className="pt-24  min-h-[100vh] relative lg:ml-[18rem]">
          <div className="px-3 py-3 md:px-10 md:py-5">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-2xl">Category</p>
              </div>
              <div className="md:flex bg-yellow-400 max-w-min rounded-md hidden">
                <input
                  type="search"
                  className="border bg-white border-yellow-400 rounded-md focus:outline-none text-sm  p-2 "
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
                btnClass={"hidden md:block"}
                events={() => {
                  handleModal();
                }}
              />
              <Table getCategory={getCategory} />
            </div>
          </div>
          {formModal ? (
            <FormComp formModal={formModal} setFormModal={setFormModal} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Category;
