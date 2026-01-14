import React from "react";
import { easeOut, motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="Footer w-full h-auto  py-5 px-2 bg-gray-50 flex justify-center gap-3  items-center lg:justify-between lg:flex-row  flex-col lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-row items-center gap-2 mt-4 "
      >
        <div className="w-20 h-20 rounded-full overflow-hidden ">
          <img
            className="object-cover w-full h-full scale-140"
            src="https://i.pinimg.com/736x/d3/96/ec/d396ec14d7ea613d2e75e39687f2261b.jpg"
            alt=""
          />
        </div>
        <p className="text-2xl font-bold tracking-wider text-gray-600">
          ScoopFizz
        </p>
      </motion.div>


      <motion.p
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease:easeOut }}
        viewport={{ once: true, amount: 0.2 }}
      
        className="w-full lg:w-fit text-lg text-gray-500 ml-4 items-center
        lg:mt-4 "> 
        &copy;2025 ScoopFizz Ice Cream. All rights reserved.
      </motion.p>
    </div>
  );
};

export default Footer;
