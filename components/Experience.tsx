"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { useTranslations } from "next-intl";
type Props = {};

const Experience = (props: Props) => {
  const t = useTranslations();
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
      className="h-screen my-6 lg:my-20 flex duration-[1s] overflow-hidden flex-col text-left md:flew-row max-w-full px-5 justify-center space-y-8 mx-auto items-center"
    >
      <h1 className="title">{t("experience")}</h1>
      <h2 className="uppercase tracking-[3px] text-gray-500 text-sm">
        {t("hoverTouch")}
      </h2>
      <div className="md:max-w-7xl w-full md:gap-5 md:grid md:grid-cols-2 md:space-x-0 flex space-x-5 overflow-x-scroll p-5 snap-mandatory md:scrollbar-none scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ba110c]/80">
        <ExperienceCard
          title={t("title")}
          company="Labz Digital"
          summary={t("expSum1")}
          techs={["/vuejs.svg", "/reactjs.svg", "/tailwind.svg", "/axios.svg"]}
          started="04/2023"
          ended="05/2023"
        />
        <ExperienceCard
          title={t("title")}
          company="Hackathon SERPRO"
          summary={t("expSum2")}
          techs={["/vuejs.svg", "/css.svg"]}
          started="07/2022"
          ended="07/2022"
        />
        <ExperienceCard
          title={t("title")}
          company="Freelancer"
          summary={t("expSum3")}
          techs={["/html.svg", "/css.svg", "/js.svg"]}
          started="04/2022"
          ended="04/2022"
        />
        <ExperienceCard
          title={t("title-bi")}
          company="Ministério da Educação"
          summary={t("expSum4")}
          techs={["/python.svg", "/google.svg", "/moffice.svg", "/bi.svg"]}
          started="08/2022"
          ended="09/2023"
        />
      </div>
    </motion.div>
  );
};

export default Experience;
