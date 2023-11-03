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
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen py-24 relative flex flex-col overflow-hidden text-left justify-center space-y-8 max-w-full mx-auto items-center z-0"
    >
      <h3 className="title">Projetos</h3>
      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ba110c]/80">
        <Project
          img={"/news.png"}
          title="GW News"
          source={[
            "/nextjs.svg",
            "/tailwind.svg",
            "/graphql.svg",
            "/stepzen.svg",
          ]}
          summary="Web app de notícias responsivo utlizando a Media Stack para buscar notícias recentes."
        />
        <Project
          img={"/naruto.png"}
          title="Anime Tracker"
          source={["/vuejs.svg", "/css.svg"]}
          summary="Web app que utilizada API de anime para buscar animes e adiciona-los a sua lista"
        />
      </div>
      <div className="w-full absolute top-[30%] bg-[#ba110c]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
