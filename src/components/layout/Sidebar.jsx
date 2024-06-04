"use client"
import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { BsFire } from "react-icons/bs";
// import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Sidebar() {
    const pathname = usePathname();
  return (
    <>
      <div className=" hidden md:block mr-10 w-[30%] ">
        <div className=" flex">
          <img src="/logo.png" alt="" />
          <p className=" text-white border p-2 px-5  text-2xl rounded-3xl my-auto ml-2  pixel-text">
            Oasis
          </p>
        </div>
        <div className=" text-white text-xl ">
          <div className=" flex my-4">
            <IoMdHome className=" my-auto" size={30} />
            <p className=" ml-2 my-auto pixel-text">Home </p>
          </div>
          <Link href="/communities" >
          <div className=" flex my-4">
            <IoIosPeople  className=" my-auto" size={30} />
            <p className={`my-auto pixel-text ml-2 ${pathname === '/communities' ? 'text-blue-500' : ''}`}>
                                Communities
                            </p>
          </div>
          </Link>
         <Link href="/events">
         <div className=" flex my-4">
            <SlCalender className=" my-auto" size={30} />
            <p className={`my-auto pixel-text ml-2 ${pathname === '/events' ? 'text-blue-500' : ''}`}>
                                Events
                            </p>
          </div>
         </Link>
         
          <hr className="border border-blue-500  mt-7" />
          <div>
          <div className=" flex my-4">
            <BsFire className=" my-auto" size={30} />
            <p className=" my-auto pixel-text text-xl ml-2">Top Communities </p>
          </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
