import React from "react";
import { MdOutlineSearch } from "react-icons/md";

export default function TopBar() {
  return (
    <>
      <div className=" hidden md:block md:flex mt-6 justify-between">
        <div className=" bg-slate-900 flex justify-between p-1 rounded-md my-auto mr-5  w-1/2  ml-14">
          <input type="text" className=" bg-slate-900 w-full" />
          <MdOutlineSearch size={25} color="white" className=" my-auto " />
        </div>
        <img src="profile.png" alt="" className=" my-auto w-16  mr-4" />
      </div>

      
    </>
  );
}
