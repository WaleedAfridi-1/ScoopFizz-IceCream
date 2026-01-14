import React from 'react'
import {motion} from "framer-motion"
const Icons = () => {
  return (
    <motion.div initial={{y:70, opacity:0, scale:0.9}} animate={{y:0, opacity:1, scale:1}} transition={{duration:0.6}} className='w-full h-auto px-2 py-5 flex gap-6 justify-around lg:justify-start lg:ml-10 flex-wrap  lg:flex-nowrap '>

        <div className=' flex  gap-2 text-lg w-fit font-[Poppins] lg:text-sm'>
      <i className="ri-leaf-line  text-green-400"></i>
        <p className='text-gray-600 font-semibold '>100% Natural</p>
        </div>

        <div className=' flex gap-2 items-center  w-fit flex-nowrap text-lg lg:text-sm'> 
            <i className="fa-solid fa-prescription-bottle text-blue-400 "></i>
            <p className='text-gray-600 font-bold '>Organic Dairy</p>
        </div>

        <div className=' w-full flex lg:w-fit items-center justify-center gap-2 lg:text-sm'>
            <i className="ri-heart-line text-red-400 text-2xl lg:text-sm"></i>
            <p className='text-gray-600 text-lg font-bold lg:text-sm'> Made With Love</p>
        </div>
    </motion.div>
  )
}

export default Icons
