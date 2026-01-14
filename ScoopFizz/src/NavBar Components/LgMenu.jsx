import React from 'react'
import {motion} from "framer-motion"
const LgMenu = () => {
  return (
    <div className='hidden lg:block text-gray-800 w-[40%] h-full '>
      <motion.ul initial={{y:-40, opacity:0}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className='flex justify-center gap-8 items-center h-full w-full font-[Poppins] hover:cursor-pointer font-semibold tracking-wider text-xl '>
        
        <li className='transition duration-300 hover:text-pink-600 hover:underline hover:underline-offset-10 relative'>Flavors</li>
        <li className='transition duration-300 hover:text-pink-600 hover:underline hover:underline-offset-10 relative'>Our Story</li>
        <li className='transition duration-300 hover:text-pink-600 hover:underline hover:underline-offset-10 relative'>Locations</li>
      </motion.ul>
    </div>
  )
}

export default LgMenu
