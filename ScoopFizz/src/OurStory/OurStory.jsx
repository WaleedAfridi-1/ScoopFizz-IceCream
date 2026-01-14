import React from 'react'
import Img from './Img.jsx'
import Content from './Content.jsx'

const OurStory = () => {
  return (
    <div className='OurStory rounded-4xl w-full h-auto flex flex-col gap-y-10 px-6 py-10  lg:flex-row  lg:justify-between lg:px-15 lg:py-13 lg:mt-15'>

      <Img/>
      <Content/>
    </div>
  )
}

export default OurStory
