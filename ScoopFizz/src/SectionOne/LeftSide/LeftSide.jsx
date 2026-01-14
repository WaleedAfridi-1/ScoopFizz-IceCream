import React from 'react'
import Content from './content.jsx'
import Buttons from './Buttons.jsx'
import Icons from './Icons.jsx'

const LeftSide = () => {
  return (
    <div className='w-full h-auto  pt-27 lg:pt-22 flex flex-col gap-3 lg:gap-0  lg:w-[55%] '>
      <Content/>
      <Buttons/>
      <Icons/>      
    </div>
  )
}

export default LeftSide
