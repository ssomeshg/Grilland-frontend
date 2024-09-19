import React from "react";

function ButtonComp({ icon, buttonName, events }) {
  return (
    <div className=" flex justify-end ">
      <div
        className="mb-5 cursor-pointer bg-yellow-400 flex justify-end items-center gap-3 text-sm px-5 rounded-md py-3 font-semibold"
        onClick={events}
      >
        {icon} {buttonName}
      </div>
    </div>
  );
}

export default ButtonComp;
