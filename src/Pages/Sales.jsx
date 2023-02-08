import React from 'react'
import Graph from '../components/Sales/Graph'
import { Overview } from './Overview'

export const Sales = () => {
  return (
    <div>
       <div className="flex m-0 p-0">
        <p className="flex m-0"> <Overview/></p>
        <p className="absolute top-[1100px] left-[390px] "><Graph className='bg-white'/></p>
       </div>

    </div>
  )
}
