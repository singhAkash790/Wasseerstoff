import React from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import {TbCircleDot} from "react-icons/tb"
import {FiStopCircle} from "react-icons/fi"
import {AiOutlineEye} from "react-icons/ai"
import {BiGitCommit, BiGitCompare,BiGitBranch} from "react-icons/bi"
import {RiBarChart2Fill} from "react-icons/ri"
import { BubbleChart } from "../components/Bubble/BubbleChart";

const Bubblechart = () => {
  return (
    <div className=" flex justify-start gap-[50px] items-center bg-[#FAFAFA] ">
      {/* left section */}
      <div className="pl-[60px] ">
        <div className=" text-left text-[34px] font-medium pb-[20px] ">
          Design faster
        </div>
        {/* graph section */}
        <div className="h-[409px] w-[290px] bg-white rounded-2xl shadow-2xl  ">
          <div className="flex pt-[20px]  justify-center items-center flex-col">
            <img src="Image/concChart.svg" alt="" />
          </div>
          <div className=" pt-[16px]  flex justify-center items-center flex-col ">
            <div className=" text-left  "> Total Earning</div>
            <div className=" flex flex-row items-center  ">
              <div className=" text-lg text-[#383874] font-semibold">
                $12,875
              </div>
              <div className="flex justify-end items-baseline">
                <div className="text-[#00B929] text-xl ">
                  <MdArrowDropUp />
                </div>
                <div className="text-[#00B929] text-md">2%</div>
              </div>
            </div>
            <div className=" text-[12px] text-[#383874] font-normal font-body-body-2 ">
              Compared to $21,504 last year
            </div>
          </div>
          <div className="flex  justify-center items-center gap-[12px] flex-col pt-[30px]">
            <div className="flex gap-[16px] w-[230px]  justify-between items-center    ">
              <div className="w-[88px]"> Presentation</div>
              <div className="">862</div>
              <div className="">
                <img src="Image/Graph1.png" alt="" />
              </div>
            </div>
            <div className="flex gap-[16px] w-[230px]  justify-between items-center">
              <div className="">Development</div>
              <div className=" w-[88px]">753</div>
              <div className="">
                <img src="Image/Graph2.png" alt="" />
              </div>
            </div>
            <div className="flex gap-[16px] w-[230px]  justify-between items-center">
              <div className="text-left w-[88px]">Research</div>
              <div className="">553</div>
              <div className="">
                <img src="Image/Graph3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* total earning and sales section */}
        <div className="bg-[#8676FF]/80 bg rounded-2xl shadow-2xl h-[252px] w-[290px] text-white flex justify-center items-center flex-col mt-[28px]">
          <div className="  flex w-[230px] h-[88px]  flex-col ">
            <div className=" text-left text-lg"> Total Earning</div>
            <div className=" flex flex-row  ">
              <div className=" text-[34px] font-medium">$12,875</div>
              <div className="text-[#00B929] text-lg ">
                <MdArrowDropUp />
              </div>
              <div className="text-[#00B929] text-xs">10%</div>
            </div>
            <div className=" text-[12px] font-normal font-body-body-2 ">
              Compared to $21,504 last year
            </div>
          </div>
          <hr className="text-[#6B5ED2] w-[230px] items-center h-0" />
          <div className="  flex w-[230px] h-[88px]  flex-col ">
            <div className=" text-left text-lg"> Sales</div>
            <div className=" flex flex-row  ">
              <div className=" text-[34px] font-medium">$42,123</div>
              <div className="text-[#00B929] text-lg ">
                <MdArrowDropUp />
              </div>
              <div className="text-[#00B929] text-xs">12%</div>
            </div>
            <div className=" text-[12px] font-normal font-body-body-2 ">
              Compared to $21,504 last year
            </div>
          </div>
        </div>
        {/* stock section */}
        <div className="w-[290px] h-[190px] bg-white flex  justify-center mt-[28px] flex-col  rounded-2xl shadow-2xl px-[30px] mb-[40]">
          <div className=" flex justify-between items-center ">
            <div className="w-[98px]">Travel</div>
            <div className="text-[#9292C1]">760</div>
            <div className="">2540</div>
            <div className="text-[#00B929] text-xl">
              <MdArrowDropUp />
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <div className="w-[98px]">Presentation</div>
            <div className="text-[#9292C1]">350</div>
            <div className="">2340</div>
            <div className="text-[#FF2D2E] text-xl">
              <MdArrowDropDown />
            </div>
          </div>
          <div className=" flex justify-between items-center ">
            <div className="w-[98px] "> Business </div>
            <div className=" text-[#9292C1]">612</div>
            <div className="">2140</div>
            <div className="text-[#00B929] text-xl">
              <MdArrowDropUp />
            </div>
          </div>
        </div>
      </div>
      {/* left side end */}

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* bubble chart */}
      <div className="bg-[#EEF1FA] h-[982px] w-[1520px] rounded-l-[73px] ">
        {/* ?background circles */}
        <div className=" absolute ">
          <div className="absolute  bg-white/30 h-[778px] w-[778px] rounded-full border-2 border-red-200  mt-[60px] ml-[330px]"></div>
          <div className=" absolute bg-[#EEF1FA] h-[738px] w-[738px] rounded-full z-10   ml-[350px] mt-[80px]"></div>
          <div className=" absolute bg-white h-[648px] w-[648px] rounded-full z-20  ml-[395px] mt-[130px]"></div>
        </div>
        {/* main content */}
        <div className=" flex justify-between pl-[210px] pr-[60px] items-center w-[1520px]  ">
          {/* left side content */}
          <div className=" flex justify-center items-center flex-col">
            {/* timline section */}
            <div className="z-30">
              <div className="uppercase text-center pt-[35px] pb-[12px] tracking-widest">
                TimeLine
              </div>
              <div className=" flex-row h-[36px] w-[351px] bg-white rounded-3xl flex justify-between items-center px-5 ">
                <div className="">1W</div>
                <div className="">2M</div>
                <div className=" bg-[#3247E5] rounded-full text-white py-1 px-3">
                  3M
                </div>
                <div className="">1Y</div>
                <div className="">ALL</div>
              </div>
            </div>
            {/* bubble chart */}
            <div className="">
                

                <BubbleChart/>
            </div>
            {/* bottom content */}
            <div className=" z-30 w-[673px] h-[146px] flex flex-row gap-[143px] pt-10 justify-between items-center lead">


              <div className=" flex flex-col justify-center items-center  z-40">
                <div className=" bg-white px-3 py-2 rounded-lg shadow-lg mb-4 text-center ">
                  <FiStopCircle className=" rotate-45 text-[#023AFF]  " />
                </div>
                <div className="uppercase leading-none   text-[#383874] font-bold text-[10px] font-body-body-2  ">
                  Trend goods
                </div>
                <div className="uppercase leading-none   text-[#383874] font-light text-[60px] font-headline-h5  ">
                  204
                </div>
              </div>


              <div className="flex flex-col justify-center items-center  z-40">
                <div className=" bg-white px-3 py-2 rounded-lg shadow-lg mb-4 text-center">
                  <AiOutlineEye className="  text-[#023AFF]  " />
                </div>
                <div className="uppercase leading-none   text-[#383874] font-bold text-[10px] font-body-body-2  ">
                  Shopping views
                </div>
                <div className="uppercase leading-none   text-[#383874] font-light text-[60px] font-headline-h5  ">
                  65,540
                </div>
              </div>


              <div className="flex flex-col justify-center items-center  z-40">
                <div className=" bg-white px-3 py-2 rounded-lg shadow-lg mb-4 text-center">
                  <RiBarChart2Fill className="  text-[#023AFF]  " />
                </div>
                <div className="uppercase leading-none   text-[#383874] font-bold text-[10px] font-body-body-2  ">
                  Store dynamics
                </div>
                <div className="uppercase leading-none   text-[#383874] font-light text-[60px] font-headline-h5  ">
                  324
                </div>
              </div>
            </div>
          </div>
          {/* right side content */}
          <div className=" gap-5 z-20 flex justify-center items-end flex-col">
            <div className="mb-[14px]">
              <div className="h-[92px] w-[46px] bg-white justify-center items-center gap-[24px] text-2xl   text-[#5A5A89] shadow-lg rounded-lg flex-col flex">
                <div className="hover:text-sky-500 hover:scale-125 hover:cursor-pointer">+</div>
                <div className="hover:text-sky-500 hover:scale-125 hover:cursor-pointer text-3xl">
                  -
                </div>
              </div>
            </div>
            <div className="">
              <div className="h-[46px] w-[46px] bg-white justify-center items-center gap-[24px] text-2xl   text-[#5A5A89] shadow-lg rounded-lg flex-col flex">
                <div className="hover:text-red-500 hover:scale-125 hover:cursor-pointer">
                  <TbCircleDot />
                </div>
              </div>
            </div>
            <div className="">
              <div className="h-[136px] w-[46px] bg-white justify-center items-center gap-[20px] text-2xl  py-2 mt-[14px]  text-[#5A5A89] shadow-lg rounded-lg flex-col flex">
                <div className="hover:text-yellow-500 hover:scale-125 hover:cursor-pointer pt-2">
                  <BiGitBranch />
                </div>
                <div className="hover:text-yellow-500 hover:scale-125 hover:cursor-pointer">
                  <BiGitCommit />
                </div>
                <div className="hover:text-yellow-500 hover:scale-125 hover:cursor-pointer pb-2">
                  <BiGitCompare />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bubblechart;
