"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col text-center md:text-left max-w-[2000px] px-5 h-screen justify-center space-y-8 mx-auto items-center"
    >
      <h3 className="title">Habilidades</h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
        Arraste por cima para saber o nível de proficiência
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-20 md:mt-0">
        <Skill source="/html.svg" prof="80" />
        <Skill source="/css.svg" prof="80" />
        <Skill source="/js.svg" prof="70" />
        <Skill source="/reactjs.svg" prof="80" />
        <Skill source="/tailwind.svg" prof="90" />
        <Skill source="/vscode.svg" prof="100" />
        <Skill source="/github.svg" prof="80" />
        <Skill source="/python.svg" prof="50" />
        <Skill source="/postgre.svg" prof="50" />
        <Skill source="/npm.svg" prof="80" />
        <Skill source="/mysql.svg" prof="60" />
        <Skill source="/nextjs.svg" prof="75" />
        <Skill source="/axios.svg" prof="85" />
        <Skill source="/firebase.svg" prof="50" />
      </div>
    </motion.div>
  );
};

export default Skills;
