import React from 'react'
import {motion} from "framer-motion"
const Logo = () => {
  return (
    <div className='flex gap-3 w-[75%]  h-full items-center pl-3  lg:w-[25%] '>

      <motion.div 
      whileHover={{scale:1.1, transition:{duration:0.2}}}
        initial={{y:-40, opacity:0, rotate:0}} 
        animate={{y:0, opacity:1}}
        transition={{type:"spring", stiffness:300,}} 
        whileTap={{scale:0.9}} 

        className='Logo w-20 h-20 lg:w-16 lg:h-16 cursor-pointer  rounded-full overflow-hidden'>
        <motion.img  className='w-full h-full object-cover scale-143' src="https://i.pinimg.com/736x/d3/96/ec/d396ec14d7ea613d2e75e39687f2261b.jpg" alt="Logo" />
        
      </motion.div>
      <motion.h4 
      initial={{y:-40, opacity:0}} 
      animate={{y:0, opacity:1}} 
      transition={{duration:0.6}} 
      
      className='text-gray-700 text-2xl font-[Poppins] tracking-wide font-semibold'>ScoopFizz</motion.h4>
    </div>
  )
}

export default Logo
