import React from "react";

const Buttons = () => {
  return (
    <div className=" w-[120px] h-screen flex flex-col gap-[2px]">
      <button className="flex flex-col py-[20px] px-[30px] bg-slate-700 rounded-sm ">
        {" "}
        CPU <span> {""}</span>
      </button>
      <button className="flex flex-col py-[20px] px-[30px] bg-slate-700 rounded-sm ">
        {" "}
        Memory <span> {""}</span>
      </button>
    </div>
  );
};

export default Buttons;
