import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { TbBuildingBank, TbBuildingCommunity } from "react-icons/tb";

export const Popup = () => {
  return (
    <div className="">
      <div className="absolute top-[230px] left-[593px]  w-[180px] h-[72px] ">
        <div className=" flex flex-col  ">
          <div className=" rounded-2xl bg-snow overflow-hidden flex flex-row py-1.5 shadow-2xl px-2.5 items-center justify-start gap-[12px]">
            <div className=" p-2 bg-sky-400 text-white rounded-md shadow-sm">
              <TbBuildingBank />
            </div>
            <div className="overflow-hidden flex flex-col  justify-start">
              <div className="relative tracking-[0.44px] leading-[20px] font-light">
                Chicago
              </div>
              <div className="relative text-base tracking-[0.15px] leading-[28px] font-semibold">
                98,320,300
              </div>
            </div>
          </div>
          <div className="flex relative justify-center -top-[16px] items-center  ">
            <MdArrowDropDown className=" text-white text-4xl  " />
          </div>
        </div>
      </div>
      {/* ----------2---------- */}
      <div className="absolute top-[148px] right-[698px]  w-[180px] h-[72px]">
        <div className=" flex flex-col  ">
          <div className=" rounded-2xl bg-snow overflow-hidden flex flex-row shadow-md py-1.5 px-2.5 items-center justify-start gap-[12px]">
            <div className="py-1.5 px-2.5 bg-[#7BDDA2] text-white rounded-md shadow-sm">
              <TbBuildingCommunity />
            </div>
            <div className="overflow-hidden flex flex-col  justify-start">
              <div className="relative tracking-[0.44px] leading-[20px] font-light">
                Berline
              </div>
              <div className="relative text-base tracking-[0.15px] leading-[28px] font-semibold">
                76,541,106
              </div>
            </div>
          </div>
          <div className="flex relative justify-center -top-[16px] items-center  ">
            <MdArrowDropDown className=" text-white text-4xl  " />
          </div>
        </div>
      </div>
      <div className="absolute top-[298px] left-[1500px]  w-[180px] h-[72px]">
        <div className=" flex flex-col justify-start items-center leading-none ">
          <div className=" rounded-2xl bg-snow shadow-lg overflow-hidden flex flex-row py-1.5 px-2.5 items-center justify-start gap-[12px]">
            <div className=" p-2 bg-[#E8A5FF] text-white rounded-md shadow-sm">
              <TbBuildingPavilon />
            </div>
            <div className="overflow-hidden flex flex-col  justify-start">
              <div className="relative tracking-[0.44px] leading-[20px] font-light">
                Shanghai
              </div>
              <div className="relative text-base tracking-[0.15px] leading-[28px] font-semibold">
                239,570,110
              </div>
            </div>
          </div>
          <div className="flex relative justify-start -top-[16px] items-center  ">
            <MdArrowDropDown className=" text-white text-4xl  " />
          </div>
        </div>
      </div>
      <div className="absolute top-[364px] left-[1135px]  w-[180px] h-[72px]">
        <div className=" flex flex-col justify-start items-center leading-none ">
          <div className=" rounded-2xl bg-snow overflow-hidden flex flex-row py-1.5 px-2.5 items-center justify-start gap-[12px] shadow-lg">
            <div className=" p-2 bg-sky-400 text-white rounded-md shadow-sm">
              <SiInternetarchive />
            </div>
            <div className="overflow-hidden flex flex-col  justify-start">
              <div className="relative tracking-[0.44px] leading-[20px] font-light">
                Giza
              </div>
              <div className="relative text-base tracking-[0.15px] leading-[28px] font-semibold">
                10,547,980
              </div>
            </div>
          </div>
          <div className="flex relative justify-start -top-[16px] items-center  ">
            <MdArrowDropDown className=" text-white text-4xl  " />
          </div>
        </div>
      </div>
      <div className="absolute top-[606px] left-[1637px]  w-[180px] h-[72px]">
        <div className=" flex flex-col justify-start items-center leading-none ">
          <div className=" rounded-2xl bg-snow overflow-hidden flex flex-row py-1.5 px-2.5 items-center justify-start gap-[12px] shadow-lg">
            <div className=" p-2 bg-sky-400 text-white rounded-md shadow-sm">
              <SiInternetarchive />
            </div>
            <div className="overflow-hidden flex flex-col  justify-start">
              <div className="relative tracking-[0.44px] leading-[20px] font-light">
                Queensisland
              </div>
              <div className="relative text-base tracking-[0.15px] leading-[28px] font-semibold">
                6,097,321
              </div>
            </div>
          </div>
          <div className="flex relative justify-start -top-[16px] items-center  ">
            <MdArrowDropDown className=" text-white text-4xl  " />
          </div>
        </div>
      </div>
      <div className="absolute top-[477] left-[716px]  w-[180px] h-[72px]">
        <div className=" flex flex-col justify-start items-center leading-none ">
          <div className=" rounded-2xl bg-snow overflow-hidden flex flex-row py-1.5 px-2.5 items-center justify-start gap-[12px] shadow-lg">
            <div className=" p-2 bg-sky-400 text-white rounded-md shadow-sm">
              <SiInternetarchive />
            </div>
            <div className="overflow-hidden flex flex-col  justify-start">
              <div className="relative tracking-[0.44px] leading-[20px] font-light">
                Manaus
              </div>
              <div className="relative text-base tracking-[0.15px] leading-[28px] font-semibold">
                12,320,300
              </div>
            </div>
          </div>
          <div className="flex relative justify-start -top-[16px] items-center  ">
            <MdArrowDropDown className=" text-white text-4xl  " />
          </div>
        </div>
      </div>
    </div>
  );
};
