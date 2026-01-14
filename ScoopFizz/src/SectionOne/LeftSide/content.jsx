import React from "react";
import { easeOut, motion } from "framer-motion";

const Content = () => {
  return (
    <div
      id="content"
      className="w-full h-auto px-11   gap-5 flex items-center flex-col overflow-auto lg:items-start"
    >
      <motion.p
        initial={{ y: -80, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: easeOut }}
        id="ScoopedFreshDaily"
        className=" text-pink-500 text-2xl font-semibold lg:ml-8 "
      >
        Scooped Fresh Daily
      </motion.p>

      <motion.h1
        initial={{ x: -80, opacity: 0, scale: 0.9 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: easeOut }}
        id="contentH1"
        className="text-gray-700 text-3xl ml-6 lg:text-7xl "
      >
        {" "}
        <span className="lg:text-6xl">Ice Cream </span>
        <span className=" block pl-10 lg:hidden ">Worth</span>{" "}
        <span className="hidden lg:block lg:text-6xl">
          Worth Melting <br className="hidden lg:block" />
          For
        </span>{" "}
        <span className="block lg:hidden">Melting For</span>
      </motion.h1>

      <motion.p
        initial={{ x: -80, opacity: 0, scale: 0.9 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="text-xl font-[poppins] tracking-wider text-gray-500 lg:w-[70%] lg:ml-6 lg:tracking-normal"
      >
        Crafted With Real Fruit, Organic Cream, And Zero Artificial Anything.
        Every Scoop IS A Little Moment Of Joy.
      </motion.p>
    </div>
  );
};

export default Content;
