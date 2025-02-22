"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { useTranslations } from "next-intl";

type Props = {};

const Skills = (props: Props) => {
  const t = useTranslations();
  const skills = [
    { source: "/js.svg", prof: "70" },
    { source: "/reactjs.svg", prof: "80" },
    { source: "/redux.svg", prof: "70" },
    { source: "/tailwind.svg", prof: "90" },
    { source: "/nextjs.svg", prof: "75" },
    { source: "/axios.svg", prof: "85" },
    { source: "/windsurf.svg", prof: "75" },
    { source: "/github.svg", prof: "80" },
    { source: "/vscode.svg", prof: "100" },
    { source: "/cursor.png", prof: "75" },
    { source: "/html.svg", prof: "100" },
    { source: "/css.svg", prof: "90" },
    { source: "/python.svg", prof: "50" },
    { source: "/postgre.svg", prof: "50" },
    { source: "/npm.svg", prof: "100" },
    { source: "/mysql.svg", prof: "60" },
    { source: "/firebase.svg", prof: "50" },
    { source: "/vuejs.svg", prof: "65" },
    { source: "/nodejs.svg", prof: "70" },
  ];

  const [visibleSkillsCount, setVisibleSkillsCount] = useState(8);

  const handleShowMore = () => {
    setVisibleSkillsCount((prevCount) => {
      const newCount = prevCount + 8;
      return newCount > skills.length ? skills.length : newCount;
    });
  };

  const handleShowLess = () => {
    setVisibleSkillsCount(8);
  };

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
      className="h-screen duration-[1.5s] my-24 flex flex-col text-center md:text-left max-w-[2000px] px-5 justify-center space-y-8 mx-auto items-center"
    >
      <h1 className="title">{t("skills")}</h1>
      <h2 className="uppercase tracking-[3px] text-gray-500 text-sm">
        {t("hoverTouchP")}
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-20 md:mt-0">
        {skills.slice(0, visibleSkillsCount).map((skill, index) => (
          <Skill key={index} source={skill.source} prof={skill.prof} />
        ))}
      </div>
      {visibleSkillsCount < skills.length && (
        <button
          onClick={handleShowMore}
          className="bg-[#ba110c] hover:bg-[#ba110c]/70 text-white font-bold py-2 px-4 rounded-lg z-100"
        >
          {t("showM")}
        </button>
      )}
      {visibleSkillsCount === skills.length && (
        <button
          onClick={handleShowLess}
          className="bg-[#ba110c] hover:bg-[#ba110c]/70 text-white font-bold py-2 px-4 rounded-lg z-100"
        >
          {t("showL")}
        </button>
      )}
    </motion.div>
  );
};

export default Skills;
