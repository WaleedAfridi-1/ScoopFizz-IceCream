import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = (props) => {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale:0.95 }}
      whileInView={{ opacity: 1, y: 0, scale:1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}  
      whileHover={{ scale: 1.05, y: -4 }}

      className="Card shadow shadow-gray-400 w-full h-70 lg:w-70 rounded-4xl flex items-center flex-col hover:scale-102 lg:hover:shadow-lg"
    >
      <div className="w-40 h-40 rounded-full box-border relative overflow-hidden -top-20 border-4 border-white shadow">
        <img
          className="w-full h-full object-cover scale-110 rounded-full"
          src={props.url}
          alt="Ice Cream"
        />
      </div>

      <h1 className="text-2xl text-gray-700 font-bold relative -top-15 left-0">
        {props.name}
      </h1>

      <p className="pl-8 pr-2 relative -top-13 left-0 text-gray-700">
        {props.desc}
      </p>

      <p className="text-pink-500 text-2xl font-semibold relative left-0 -top-5">
        {props.price}
      </p>
    </motion.div>
  );
};

export default Card;
