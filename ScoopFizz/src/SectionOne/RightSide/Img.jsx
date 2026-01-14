import React from 'react'
import {easeInOut, motion} from "framer-motion"
const Img = () => {
  return (
    <motion.div 
      initial={{x:40, opacity:0}}
      animate={{opacity:1, x:0, rotate:0, scale:1}}
      whileHover={{rotate:[4,-4,4], transition:{duration:5.5, repeat:Infinity}}}
      transition={{duration:0.6, ease:easeInOut}}
        whileTap={{scale:0.90, transition:{duration:0.2}}}
    
    className='w-full  h-fit cursor-pointer lg:h-full text-center overflow-hidden  rounded-4xl'>
      <motion.img className='w-full h-full object-cover ' src="https://i.pinimg.com/736x/7d/8c/5d/7d8c5d1f71aca553a378747b9f3a99ea.jpg" alt="" 
      />
    </motion.div>
  )
}

export default Img
