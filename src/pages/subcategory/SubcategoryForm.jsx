import React, { useContext, useState } from "react";

// icons
import { FaFileCirclePlus } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import ButtonComp from "../../components/ButtonComp";
import { AppContext } from "../../context/AppContext";

function SubcategoryForm({ setFormModal, formModal }) {
  const { getCategory } = useContext(AppContext);

  // Modal close
  const handleModalClose = () => {
    setFormModal(false);
  };
  const [formObject, setFormObject] = useState({
    sNo: null,
    image: null,
    name: null,
    date: null,
  });

  // handle Category Name
  const [categoryName, setCategoryName] = useState("");
  const handleCategory = (e) => {
    setCategoryName(e.target.value);
  };

  // handle category image
  const [formCategoryImage, setFormCategoryImage] = useState(null);

  const imageChange = (e) => {
    setFormCategoryImage(URL.createObjectURL(e.target.files[0]));
  };

  // Date handle function
  const dateSet = new Date();
  const formattedDate = dateSet.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // handle form submit
  const handleCategoryForm = (e) => {
    e.preventDefault();

    if (categoryName === "" || formCategoryImage === null) {
      alert("Category Field id Empty ");
    } else {
      const categoryNo = getCategory.length + 1;
      console.log(categoryNo);

      const newCategory = {
        sNo: categoryNo,
        name: categoryName,
        image: formCategoryImage,
        date: formattedDate,
      };
      console.log(newCategory);

      setFormObject(newCategory);
      getCategory.push(newCategory);
      handleModalClose();
    }
  };

  return (
    <div>
      <div className="w-full h-full fixed top-0 left-0 z-20" style={{backdropFilter:"blur(8px)"}}>
        <div className="fixed bg-white shadow-xl rounded-md p-4 border border-yellow-400  min-w-96 m-auto z-30 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]">
          <div className="flex justify-between items-center py-3 mb-5">
            <p className="text-lg font-semibold">Add Category</p>
            <div onClick={() => handleModalClose()}>
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
                  <div
                    className={
                      formCategoryImage == null
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-lg"
                    }
                  >
                    <img
                      className="w-full h-full object-cover object-top p-1 rounded-2xl"
                      src={formCategoryImage}
                      alt=""
                    />
                  </div>
                </label>
                <input
                  type="file"
                  name="fileUpload"
                  id="fileUpload"
                  className="hidden"
                  onChange={imageChange}
                  required
                />
              </div>
            </div>
            <div className="mt-1">
              <select
                name=""
                id=""
                className="bg-white mt-1 w-full border-yellow-300 border rounded-md p-3 text-sm focus:outline-none focus:border focus:border-yellow-500 placeholder:text-gray-200"
              >
                {getCategory.map(({ name }) => {
                  return <option value="">{name}</option>;
                })}
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-sm font-medium ">
                Category Name
              </label>
              <input
                type="text"
                placeholder="category Name"
                onChange={handleCategory}
                required={true}
                className="bg-white mt-1 w-full border-yellow-300 border rounded-md p-3 text-sm focus:outline-none focus:border focus:border-yellow-500 placeholder:text-gray-200"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="text-sm font-medium ">
                Category Name
              </label>
              <input
                type="text"
                placeholder="category Name"
                required={true}
                className="bg-white mt-1 w-full border-yellow-300 border rounded-md p-3 text-sm focus:outline-none focus:border focus:border-yellow-500 placeholder:text-gray-200"
              />
            </div>

            <ButtonComp
              buttonName={"Add Item"}
              events={(e) => handleCategoryForm(e)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubcategoryForm;
