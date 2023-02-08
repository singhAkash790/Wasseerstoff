import React from "react";
import {FiUser} from "react-icons/fi"
import {IoIosOptions} from "react-icons/io"
import {BsSearch} from "react-icons/bs"

function Header() {
  return (
   <>
   <nav className=" shadow-lg w-[1920px] h-[60px] ">
    {/* Main section */}
    <div className=" flex justify-between items-center px-10  py-1 ">
         {/* logo */}
        <div className="">
            <img src="Image/Logo.png" alt="Logo" className="" />        
        </div>
       {/* serach bar */}
        <div className="bg-[#EEF0FA] rounded-md outline-none  flex justify-center items-center px-3 ">
            <input type="text" className=" flex justify-start items-center bg-[#EEF0FA] rounded-md text-end w-[520px] h-[32px] outline-none border-none " placeholder="Search" />
            <BsSearch className="text-xl text-[#A1A3D4] pl-2"/>
        </div>
        {/* middle button */}
        <div className=" font-medium text-[16px]  py-1">
            <ul className=" flex row-auto gap-[84px] justify-center items-center   text-[#8484A0] text-base">
                <ul className="  ">Staticstic</ul>
                <ul className="hover:underline underline-[#5756B3] ease-linear duration-300 text-black">Overview</ul>
                <ul className="">DashBord</ul>
                <ul className="">Analytics</ul>
            </ul>
        </div>
        {/* side toggles */}
        <div className="">
            <ul className="flex row-auto gap-5 text-[#8484A0] text-xl">
                <ul className=" hover:text-blue-500"><FiUser/></ul>
                <ul className=" "><IoIosOptions className=" hover:text-[#D61355]"/></ul>
            </ul>
        </div>
    </div>
   </nav>
   </>
  );
}

export default Header;
