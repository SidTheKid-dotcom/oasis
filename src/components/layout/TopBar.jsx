import React from "react";
import { MdOutlineSearch } from "react-icons/md";

export default function TopBar() {
  return (
    <>
      <div className=" hidden md:flex  justify-between sticky    top-16 ">
        <div className=" bg-slate-900 flex justify-between p-1 rounded-md my-auto   w-1/2  mr-auto ml-auto">
          <input type="text" className=" bg-slate-900 w-full" />
          <MdOutlineSearch size={25} color="white" className=" my-auto " />
        </div>
        <img src="profile.png" alt="" className=" my-auto w-16  mr-4" />
      </div>

      
    </>
  );
}
