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
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx auto items-center z-0"
    >
      <h3 className="title">Projetos</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ba110c]/80">
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
      <div className="w-full absolute top-[30%] bg-[#ba110c]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;