import React from 'react'
import {motion} from "framer-motion"
const Buttons = () => {
  return (
    <motion.div 
    initial={{y:70, opacity:0,scale:0.95}} 
    animate={{y:0, opacity:1,scale:1}} 
    transition={{duration:0.6}} 
    
    className=' w-full h-auto px-8 py-6 flex flex-col gap-4 lg:flex-row lg:ml-7 '>
      <motion.button
      whileTap={{scale:0.90, transition:{duration:0.2}}}
      className='hover:-translate-y-1 lg:w-[35%]  lg:py-3  bg-pink-400 py-4 cursor-pointer transition-all duration-300  px-2 rounded-full text-white font-bold shadow-2xl hover:bg-pink-500'>Explore Flavors</motion.button>
      <motion.button
      whileTap={{scale:0.90, transition:{duration:0.2}}}
      
      className='lg:w-[35%] lg:py-3 border-2 hover:bg-gray-600 hover:text-white cursor-pointer transition-all duration-300 border-gray-600 px-2 py-4 rounded-full text-gray-700 font-bold shadow'>Find Us Near You</motion.button>
    </motion.div>
  )
}

export default Buttons
