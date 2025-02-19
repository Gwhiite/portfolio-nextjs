"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";

type Props = {};

const Projects = (props: Props) => {
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
      <h1 className="title">Projects</h1>
      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ba110c]/80">
        <Project
          video={"/videos/Hulu-Clone.webm"}
          title="Hulu Clone"
          source={["/nextjs.svg", "/tailwind.svg", "/tmdb.svg"]}
          summary="Responsive Web app based on Hulu that uses The Movie DB API to request movie data."
        />
        <Project
          video={"/videos/Chatbot.webm"}
          title="Chatbot AI"
          source={["/nextjs.svg", "/tailwind.svg", "/shadcn.svg"]}
          summary="Responsive Chatbot powered by Ollama 3.3"
        />
        <Project
          video={"/videos/Anime-Tracker.webm"}
          title="Anime Tracker"
          source={["/vuejs.svg", "/css.svg", "/jikan.svg"]}
          summary="Responsive web app that uses the Jikan API to request anime data and add them to your list."
        />
        <Project
          video={"/videos/Google-Clone.webm"}
          title="Google Clone"
          source={["/nextjs.svg", "/tailwind.svg", "/google.svg"]}
          summary="Responsive web app that uses the Google API to search for results."
        />
      </div>
      <div className="w-full absolute top-[30%] bg-[#ba110c]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
