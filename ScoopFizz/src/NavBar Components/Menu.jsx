import React from 'react'
import {motion}  from "framer-motion"
const Menu = () => {
  return (
    <motion.div initial={{y:-40, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} className=' w-[25%] h-full gap-3 flex items-center text-4xl  lg:hidden'>
      <i className="ri-map-pin-line"></i>
      <i className="ri-menu-line"></i>
    </motion.div>
  )
}

export default Menu
