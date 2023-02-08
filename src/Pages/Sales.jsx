import React from 'react'
import Graph from '../components/Sales/Graph'
import { Overview } from './Overview'

export const Sales = () => {
  return (
    <div>
       <div className="flex m-0 p-0">
        <div className=""> <Overview/></div>
        <div className="absolute top-[1100px] left-[390px] "><Graph /></div>
       </div>

    </div>
  )
}
