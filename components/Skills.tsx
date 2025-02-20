"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { useTranslations } from "next-intl";

type Props = {};

const Skills = (props: Props) => {
  const t = useTranslations()
  return (
    <motion.div
      initial={{
        opacity: 0,
        rotate: 0.02,
      }}
      whileInView={{
        opacity: 1,
        rotate: 0.02,
      }}
      className="h-screen duration-[1.5s] py-24 flex flex-col text-center md:text-left max-w-[2000px] px-5 justify-center space-y-8 mx-auto items-center">
      <h1 className="title">{t("skills")}</h1>
      <h2 className="uppercase tracking-[3px] text-gray-500 text-sm">
        {t("hoverTouchP")}
      </h2>
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
        <Skill source="/vuejs.svg" prof="65" />
        <Skill source="/nodejs.svg" prof="60" />
      </div>
    </motion.div>
  );
};

export default Skills;
