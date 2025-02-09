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
      <h1 className="title">Projetos</h1>
      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ba110c]/80">
        <Project
          img={"/news.png"}
          title="GW News"
          source={[
            "/reactjs.svg",
            "/nextjs.svg",
            "/tailwind.svg",
            "/graphql.svg",
            "/stepzen.svg",
            "/mediastack.svg",
          ]}
          summary="Web app de notícias responsivo utlizando a Media Stack para buscar notícias recentes."
        />
        <Project
          img={"/naruto.png"}
          title="Anime Tracker"
          source={["/vuejs.svg", "/css.svg", "/jikan.png"]}
          summary="Web app responsivo que utiliza a Jikan API para requisitar os dados de animes e adicioná-los a sua lista."
        />
        <Project
          img={"/hulu.png"}
          title="Hulu 2.0"
          source={["/reactjs.svg", "/nextjs.svg", "/tailwind.svg", "/tmdb.svg"]}
          summary="Web app baseada no Hulu que utiliza a API do The Movie DB para requisitar os dados dos filmes."
        />
        <Project
          img={"/spotify.png"}
          title="Spotify layout"
          source={["/reactjs.svg", "/nextjs.svg", "/tailwind.svg"]}
          summary="Layout desktop do Spotify feito com o intuito de praticar TailwindCSS."
        />
      </div>
      <div className="w-full absolute top-[30%] bg-[#ba110c]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
