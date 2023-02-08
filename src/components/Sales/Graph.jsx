import React from 'react'
import{BsDot} from "react-icons/bs"

const Graph = () => {
  return (
    <div className='w-[1071px] h-[528px] m-10 rounded-2xl shadow-2xl p-5 bg-white'>
        {/* Header */}
        <div className="w-[1011px] h-[28px] flex justify-between items-center pb-10  bg-white">
            <div className=" ">Sales Figures</div>
            <div className="">
                <ul className=" flex row-auto items-center ">
                    <p className=" flex items-center"><BsDot className='text-[#A46CE9] text-5xl '/>Sales</p>
                    <p className=" flex items-center"><BsDot className='text-[#FAE634] text-5xl'/>User</p>
                    <p className=" flex items-center"><BsDot className='text-[#FC717D] text-5xl'/> Product</p>
                    <p className=" flex items-center"><BsDot className='text-[#695DFB] text-5xl'/>Team</p>

                </ul>
            </div>
        </div>
        {/* graph */}
        <div className=" Realative bg-white">
              <div className=" absolute  w-[1011px] h-[423px] z-10">
                  <img src="Image/Chart.svg" alt="" className='w-[1011px] h-[423px]' />
                  <div className="absolute z-20 top-20 left-2 bottom-0 translate-x-0 translate-y-0  ">
                      <img src="Image/Data.png" alt="" />
                  </div>

              </div>
            <div className=" absolute z-30  left-[170px] block transform transition-all duration-1000 ease-in scale-100">
                <img src="Image/Datafig.png" alt="" />
            </div>
          
        </div>
    </div>
  )
}

export default Graph