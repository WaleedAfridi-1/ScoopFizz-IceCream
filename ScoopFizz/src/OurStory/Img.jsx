import React from 'react'
import {easeOut, motion} from "framer-motion"
const Img = () => {
  return (
    <>
    <motion.div className='w-full h-130 rounded-4xl  relative lg:w-[43%] lg:mt-4'
    initial={{opacity:0, y:60, scale:0.95}}
    whileInView={{opacity:1, y:0,scale:1}}
    viewport={{once:true, amount:0.3}}
    transition={{duration:0.6, ease:easeOut}}
    >

      <img className='w-full h-full object-cover rounded-4xl  ' src="https://i.pinimg.com/736x/34/92/b9/3492b9e8f0983bf3dd019aa4fbe80f16.jpg" alt="" />
    <div className='w-30 h-30 rounded-full  shadow-xl overflow-hidden border-8 border-white -bottom-4 -right-3 absolute z-10 '>
        
        <motion.img 
        animate={{rotate:360}} 
        transition={{repeat:Infinity, duration:2.5 ,ease:'linear'}} 
        
        className='w-full h-full object-cover  rounded-full' src="https://i.pinimg.com/736x/cf/ee/aa/cfeeaaf5dcb0451f2b3f5b28a05509fb.jpg" alt="" />
    </div>

    </motion.div>
    </>
  )
}

export default Img
