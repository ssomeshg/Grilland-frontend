import React, { useContext, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

// icons
import { FaFileCirclePlus } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import ButtonComp from "../../components/ButtonComp";
import { AppContext } from "../../context/AppContext";

function FormComp({ setFormModal, formModal }) {
  const { getCategory,formObject,setFormObject } = useContext(AppContext);
  const fileInputRef = useRef(null);

  // Modal close
  const handleModalClose = () => {
    setFormModal(false);
  };


  // handle Category Name
  const [categoryName, setCategoryName] = useState("");
  const handleCategory = (e) => {
    setCategoryName(e.target.value);
  };

  // handle category image
  const [formCategoryImage, setFormCategoryImage] = useState(null);

  const imageChange = (e) => {
    try {
      console.log("image starts");

      const imageSize = e.target.files[0].size;

      if (imageSize > 1000000) {
        toast.error("Image Size Should be Less than 1MB");
        // Clear the file input
        fileInputRef.current.value = "";
        return;
      } else {
        setFormCategoryImage(URL.createObjectURL(e.target.files[0]));
        fileInputRef.current.value = "";
      }

      console.log("image ends");
    } catch (error) {
      console.error("Error in imageChange function:", error);
      toast.error("An error occurred during image upload");
    }
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
      toast.error("Category Field id Empty ");
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

      setFormObject([...formObject,newCategory]);
      getCategory.push(newCategory);
      handleModalClose();
    }
  };

  return (
    <div>
      <Toaster />
      <div className="w-full h-full fixed top-0 left-0 z-20" style={{backdropFilter:"blur(8px)"}}></div>
      <div className="fixed bg-white shadow-xl rounded-md p-4 border border-yellow-400  min-w-96 m-auto z-30 left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] transform transition-transform scale-100">
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
                ref={fileInputRef}
                onChange={imageChange}
                required
              />
            </div>
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

          <ButtonComp
            buttonName={"Add Item"}
            events={(e) => handleCategoryForm(e)}
          />
        </form>
      </div>
    </div>
  );
}

export default FormComp;
