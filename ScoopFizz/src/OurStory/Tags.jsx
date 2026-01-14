import React from "react";
import { easeOut, motion } from "framer-motion";

const Tags = () => {
  return (
    <div className="w-full h-auto  mt-10 px-2 py-4 flex flex-col gap-6 ">
      
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease:easeOut }}
        viewport={{ once: true, amount: 0.2 }}

        className="w-full flex flex-col gap-6 lg:flex-row "
      >
        <div className="w-full flex text-lg items-center gap-3 ">
          <p className="text-2xl bg-white px-2 py-1 shadow text-emerald-500 rounded-full">
            <i class="ri-leaf-line"></i>
          </p>
          <p className="font-semibold text-gray-800">
            100% Natural Ingredients
          </p>
        </div>
        <div className="w-full flex text-lg items-center gap-3 ">
          <p className="text-2xl bg-white px-2 py-1 shadow rounded-full">
            <i class="ri-map-pin-line text-cyan-400"></i>
          </p>
          <p className="font-semibold text-gray-800">Locally Sourced</p>
        </div>
      </motion.div>

      <motion.div className="w-full flex flex-col gap-6 lg:flex-row "
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease:easeOut }}
        viewport={{ once: true, amount: 0.2 }}>
          
        <div className="w-full flex text-lg items-center gap-3 ">
          <p className="text-2xl bg-white px-2 py-1 shadow text-emerald-500 rounded-full">
            <i class="ri-heart-line text-red-500"></i>
          </p>
          <p className="font-semibold text-gray-800">
            100% Natural Ingredients
          </p>
        </div>

        <div className="w-full flex text-lg items-center gap-3 ">
          <p className="text-2xl bg-white px-2 py-1 shadow text-red-500 rounded-full">
            <i class="ri-sparkling-2-fill text-amber-300"></i>
          </p>
          <p className="font-semibold text-gray-800">Made Daily Fresh</p>
        </div>
      </motion.div>

    </div>
  );
};

export default Tags;
