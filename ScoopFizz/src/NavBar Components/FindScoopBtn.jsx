import React from 'react'
import {motion} from "framer-motion"
const FindScoopBtn = () => {
  return (
    <motion.div initial={{y:-40, opacity:0}} animate={{opacity:1, y:0}} whileTap={{scale:0.95}} whileHover={{scale:1.1}} transition={{type:"spring", stiffness:300}} className=' hidden w-[15%] h-full  lg:flex  lg:text-center items-center justify-end'>
        <button className='bg-pink-500  transition-all duration-300 px-8 text-xs h-12 cursor-pointer hover:shadow hover:bg-pink-600 font-bold text-white  text-center rounded-full'>Find a Scoop Shop</button>
    </motion.div>
  )
}

export default FindScoopBtn
