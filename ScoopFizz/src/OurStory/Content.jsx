import React from "react";
import Tags from "./Tags.jsx";
import { easeOut, motion } from "framer-motion";
const Content = () => {
  return (
    <div className="w-full h-auto px-2 py-6  flex flex-col gap-2 lg:w-[53%] ">
      <motion.p
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="text-lg text-pink-500 font-semibold tracking-widest"
      >
        Our Story
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-5xl text-gray-600 font-bold"
      >
        From Our Kitchen to Your Cone
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-5 text-lg text-gray-700"
      >
        It startded in a tiny kitchen with a hand-crank machine and a wild idea:
        What if ice cream actually tested like the fruit on the label?
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-lg mt-5 text-gray-500"
      >
        Today, we still make every batch by hand using organic cream from local
        farms. real fruit picked at peak ripeness, and ingredients you can
        actually pronounce. No artificial colors. No mystery stabilizers. Just
        pure, honest deliciousness.
      </motion.p>

      <Tags />
    </div>
  );
};

export default Content;
