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
          img={"/news.png"}
          title="GW News"
          source={[
            "/nextjs.svg",
            "/tailwind.svg",
            "/graphql.svg",
            "/stepzen.svg",
            "/mediastack.svg",
          ]}
          summary="Responsive news web app using Media Stack to fetch recent news."
        />
        <Project
          img={"/naruto.png"}
          title="Anime Tracker"
          source={["/vuejs.svg", "/css.svg", "/jikan.png"]}
          summary="Responsive web app that uses the Jikan API to request anime data and add them to your list."
        />
        <Project
          img={"/hulu.png"}
          title="Hulu 2.0"
          source={["/nextjs.svg", "/tailwind.svg", "/tmdb.svg"]}
          summary="Web app based on Hulu that uses The Movie DB API to request movie data."
        />
        <Project
          img={"/chatbot.png"}
          title="Chatbot AI"
          source={["/nextjs.svg", "/tailwind.svg", "/shadcn.svg"]}
          summary="Responsive Chatbot powered by Ollama 3.3"
        />
        <Project
          img={"/spotify.png"}
          title="Spotify layout"
          source={["/nextjs.svg", "/tailwind.svg"]}
          summary="Desktop layout of Spotify created to practice TailwindCSS."
        />
      </div>
      <div className="w-full absolute top-[30%] bg-[#ba110c]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
