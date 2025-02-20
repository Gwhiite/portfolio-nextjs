"use client";

import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import { useTranslations } from "next-intl";

type Props = {};

const Projects = (props: Props) => {
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
      className="h-screen duration-[1.5s] py-24 relative flex flex-col overflow-hidden text-left justify-center space-y-8 max-w-full mx-auto items-center z-0">
      <h1 className="title">{t("projects")}</h1>
      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ba110c]/80">
        <Project
          video={"/videos/Hulu-Clone.webm"}
          title="Hulu Clone"
          source={["/nextjs.svg", "/tailwind.svg", "/tmdb.svg"]}
          summary={t("projSum1")}
        />
        <Project
          video={"/videos/Chatbot.webm"}
          title="Chatbot AI"
          source={["/nextjs.svg", "/tailwind.svg", "/shadcn.svg"]}
          summary={t("projSum2")}
        />
        <Project
          video={"/videos/Anime-Tracker.webm"}
          title="Anime Tracker"
          source={["/vuejs.svg", "/css.svg", "/jikan.svg"]}
          summary={t("projSum3")}
        />
        <Project
          video={"/videos/Google-Clone.webm"}
          title="Google Clone"
          source={["/nextjs.svg", "/tailwind.svg", "/google.svg"]}
          summary={t("projSum4")}
        />
      </div>
      <div className="w-full absolute top-[30%] bg-[#ba110c]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
