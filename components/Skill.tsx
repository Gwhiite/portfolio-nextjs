"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  source: string;
  prof: string;
};

const Skill = ({ source, prof }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <Image
        height={0}
        width={0}
        src={source}
        alt="skill"
        className="rounded-lg p-2 border border-[#ba110c]/50 w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-white/80 w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-xl z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl lg:text-3xl font-bold text-black opacity-100">
            {prof}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
