import React from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {BiTrendingUp} from "react-icons/bi"
import {RiVipCrownLine, RiBarChartFill} from "react-icons/ri"
import  Map  from '../components/Overview/Map'
import ProgressBar from 'react-animated-progress-bar';
import Barchart from '../components/Overview/Barchart'
import { Popup } from '../components/Overview/Popup'



export const Overview = () => {
    function animateValue( obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.innerHTML = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
      
      const obj = document.getElementById("value");
      animateValue(obj, 0, 2431340, 5000);
      const obj1 = document.getElementById("tearning");
      animateValue(obj1, 0, [540549], 5000);
      const obj2 = document.getElementById("tsale");
      animateValue(obj2, 0, [1205677], 5000);
      const obj3 = document.getElementById("purchase");
      animateValue(obj3, 0, [48430039], 5000);
      const obj4 = document.getElementById("Activeuser");
      animateValue(obj4, 0, [92980], 5000);const 
      obj5 = document.getElementById("Newuser");
      animateValue(obj5, 0, [22650], 5000);
      
  return (
    <>
      <div className="w-[1920px] h-[980px] box-border bg-[#E2E4F0] font-headline-h5">
        {/* Upper sectiom */}
        <div className="  flex justify-start items-start px-10">
          {/* Text section  */}
          <div className="">
            {/* Top Section`` */}
            <div className="pt-[123px]">
              <div className=" flex justify-start items-center gap-6 uppercase pl-3 ">
                <p className=" text-xl font-semibold">All user</p>
                <p className=""> Detail </p>
                <p className="">
                  <MdOutlineKeyboardArrowRight />
                </p>
              </div>
              <div
                className=" font-medium text-7xl text-[#383874] w-[310px]"
                id="value"
              >
                2,431,340
              </div>
            </div>
            {/* Middle list */}
            <div className=" flex  flex-col items-start h-[270px] w-[218px]   pt-[87px] pb-[111px]">
              <div className=" flex justify-start items-center ">
                <p className=" p-3 rounded-xl bg-[#8676FF]">
                  <BiTrendingUp className="rounded-full text-white border-white border text-3xl" />
                </p>
                <p className=" p-0">
                  <ul className="m-0">
                    <article className=" text-[#383874] font-normal text-lg tracking-tight m-0">
                      Total Earning
                    </article>
                    <article
                      className=" text-[#383874] font-semibold text-xl"
                      id="tearning"
                    >
                      540,549
                    </article>
                  </ul>
                </p>
              </div>
              <div className=" flex justify-center items-center ">
                <p className=" p-3 rounded-xl bg-[#66C8FF]">
                  <RiVipCrownLine className=" text-white  text-3xl" />
                </p>
                <p className="">
                  <ul className="m-0">
                    <article className=" text-[#383874] font-normal text-xl">
                      Sales
                    </article>
                    <article
                      className=" text-[#383874] font-semibold text-xl"
                      id="tsale"
                    >
                      1,205,677
                    </article>
                  </ul>
                </p>
              </div>
              <div className=" flex justify-center items-center ">
                <p className=" p-3 rounded-xl bg-[#FF9066]">
                  <RiBarChartFill className=" text-white  text-3xl" />
                </p>
                <p className="">
                  <ul>
                    <article className=" text-[#383874] font-normal text-xl">
                      Purcahse
                    </article>
                    <article
                      className=" text-[#383874] font-semibold text-xl"
                      id="purchase"
                    >
                      48,430,039
                    </article>
                  </ul>
                </p>
              </div>
            </div>
            {/* Lower Percentage figure */}
            <div className="  gap-[50px]  flex pt-[150px]  ">
              {/* Active user`` */}
              <div className=" justify-center flex items-center gap-[18px]">
                <ProgressBar
                  width="150"
                  trackWidth="15"
                  percentage="27"
                  defColor={{
                    fair: "blue",
                    good: "yellow",
                    excellent: "green",
                    poor: "red",
                  }}
                />
                <p className="">
                  <article className="" id="Activeuser">
                    92,980
                  </article>
                  <article className="">Active user</article>
                </p>
              </div>
              {/* New user */}
              <div className=" ">
                <div className=" flex justify-center items-center gap-[18px]">
                  <ProgressBar
                    width="150"
                    trackWidth="15"
                    percentage="67"
                    defColor={{
                      fair: "blue",
                      good: "green",
                      excellent: "green",
                      poor: "red",
                    }}
                  />
                  <p className="">
                    <article className="" id="Newuser">
                      22,652
                    </article>
                    <article className="">New user</article>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Map Content */}
          <div className=" flex relative ">
            <Map />
          </div>
        </div>
        {/* Lower section */}
        <div className=" pt-[56px]">
          <div className=" box-border flex justify-items-start gap-3 mx-[60px] px-3 bg-white rounded-md w-[1800px] h-[86px] ">
            {/* sales fig. */}
            <div className=" py-4">
              <p className=" text-sm  tracking-tight my-0 py-0"> Sales Figure</p>
              <p className=" text-[#383874] font-semibold text-[22px] text-center my-0 py-0">$10,430</p>
            </div>
            {/* barchart */}
            <div className="">
              <p className=" flex justify-center flex-col items-center ">
                <Barchart />
              </p>
              <div className=" flex justify-center w-[1593px] h-1.5 shrink-0 ml-8 ">
                <div className=" h-full w-[15%]  rounded-l-base bg-orange" />
                <div className=" h-full w-[30%]   bg-fervent-pink" />
                <div className=" h-full w-[55%]  rounded-r-base bg-purple-heart" />
              </div>
            </div>
          </div>
        </div>
        {/* popup data */}
        <Popup/>
      </div>
    </>
  );
}
