import React from 'react'

export const BubbleChart = () => {
  return (
    <div className=' relative h-[648px] w-[1045px] z-40'>
        <img
        className="absolute top-[519px] left-[893px] "
        alt=""
        src="Image/bubble3.svg"
      />
      <img
        className="absolute right-0"
        alt=""
        src="Image/bubble1.svg"
      />
      <img
        className="absolute top-[540px]  "
        alt=""
        src="Image/bubble2.svg"
      />
      <img
        className="absolute "
        alt=""
        src="Image/bubble3.svg"
      />
      <img
        className="absolute left-[80px] top-4"
        alt=""
        src="Image/bubble-chart.svg"
      />
       <div className="absolute top-[280px] left-[490px] text-center ">
        <div className="font-headline-h5 text-white text-[16px] font-light">Investment</div>
        <div className="font-headline-h5 text-white text-[20px] font-bold">$76,644</div>
        <div className="font-headline-h5 text-white text-[14px] font-light">3 Month</div>
       </div>
       <div className="absolute top-[190px] left-[255px] text-center">
        <div className="font-headline-h5 text-white text-[14px] font-light"> Development</div>
        <div className="font-headline-h5 text-white text-[16px] font-normal">$31,657</div>
       </div>
       <div className="absolute top-[82px] left-[560px] text-center"> 
          <div className="font-headline-h5 text-white text-[14px] font-light"> Finance</div>
          <div className="font-headline-h5 text-white text-[16px] font-normal">$23,657</div>
       </div>
       <div className="absolute top-[460px] left-[320px] text-center"> 
          <div className="font-headline-h5 text-white text-[14px] font-light"> Desgin</div>
          <div className="font-headline-h5 text-white text-[16px] font-normal">$32,987</div>
       </div>
       <div className="absolute top-[275px] left-[700px] text-center"> 
          <div className="font-headline-h5 text-white text-[14px] font-light"> Business</div>
          <div className="font-headline-h5 text-white text-[16px] font-normal">$21,987</div>
       </div>
    </div>
  )
}
