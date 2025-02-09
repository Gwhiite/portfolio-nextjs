"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        rotate: 0.02,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        rotate: 0.02,
      }}
      className="relative duration-[2.5s] flex justify-center items-center">
      <div className="border border-[#ba110c] rounded-full h-[200px] w-[200px] mt-52 animate-ping absolute" />
      <div className="border border-[#ba110c] rounded-full h-[300px] w-[300px] mt-52 animate-ping absolute" />
      <div className="border border-[#ba110c] rounded-full h-[500px] w-[500px] mt-52 animate-ping absolute" />
      <div className="border border-[#ba110c]/20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse absolute" />
      <div className="border border-[#ba110c] rounded-full h-[800px] w-[800px] mt-52 animate-ping absolute" />
    </motion.div>
  );
}

export default BackgroundCircles;
