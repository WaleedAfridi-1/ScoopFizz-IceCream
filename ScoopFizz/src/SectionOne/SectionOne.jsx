import React from 'react'
import LeftSide from './LeftSide/LeftSide.jsx'
import RightSide from './RightSide/RightSide.jsx'

const SectionOne = () => {
  return (
    <div id='Section' className='SectionOne rounded-4xl w-full min-h-screen py-6 px-4 lg:flex lg:justify-between'>
      <LeftSide/>
      <RightSide/>
    </div>
  )
}

export default SectionOne
