import React from 'react'
import {easeOut, motion} from "framer-motion"
const Content = () => {
  return (
    <div className='w-full h-auto  py-10 lg:py-6 flex flex-col gap-4 '>
      <motion.p 
      initial={{opacity:0, y:60, scale:0.95}} 
      whileInView={{opacity:1, y:0, scale:1}} 
      transition={{duration:0.5, ease:easeOut}} 
      viewport={{once:true, amount:0.2}} 
      
      className='text-pink-500 text-center tracking-widest lg:font-bold'>OUR FLAVORS</motion.p>
      
      <motion.h1 
      initial={{opacity:0, y:60, scale:0.95}} 
      whileInView={{opacity:1, y:0, scale:1}} 
      viewport={{once:true, amount:0.2}} 
      transition={{duration:0.6, ease:easeOut}}
      
      className='text-center text-5xl text-gray-700 font-bold'>Taste The <br className='block sm:hidden' />Obsession</motion.h1>
      
      <motion.p 
      initial={{opacity:60, y:60, scale:0.95}} 
      whileInView={{opacity:1,y:0,scale:1 }} 
      viewport={{once:true, amount:0.2}}
      transition={{duration:0.6, ease:easeOut}}

      className='text-gray-600 mx-6 lg:text-center text-lg'>Small batches. Big flavor.Always made from scratch. </motion.p>
    </div>
  )
}

export default Content
