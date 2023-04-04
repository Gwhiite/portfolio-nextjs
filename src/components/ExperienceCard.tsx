import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import js from "../../public/js.svg";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      >
        <Image src={js} width={128} height={128} alt="js" />
      </motion.div>
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">Estágio</h4>
        <p className="font-bold text-2xl mt-1">Ministério da educação</p>
        <div className="flex space-x-2 my-2">Tecnologias usadas</div>
        <p className="uppercase py-5 text-gray-300 ">08/2022 - Atual</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
}
