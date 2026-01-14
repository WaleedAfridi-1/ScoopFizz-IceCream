import React from 'react'
import Content from './Content.jsx'
import CardsContainer from './CardsContainer.jsx'
import Btn from './Btn.jsx'

const SectionTwo = () => {
  return (
    <div className='SectionTwo w-full h-auto gap-5  lg:mt-6 mt-2 py-10 rounded-xl'>
      <Content/>
      <CardsContainer/>
      <Btn/>
    </div>
  )
}

export default SectionTwo
