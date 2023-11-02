"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flew-row max-w-full px-5 justify-evenly mx-auto items-center"
    >
      <h3 className="title">Experiência</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ba110c]/80">
        <ExperienceCard
          title="Desenvolvedor Front-End"
          company="Labz Produtora Digital"
          summary="Desenvolvedor responsável pelo layout das páginas utilizando VueJS, ReactJS, TailwindCSS e Axios."
          techs={["/vuejs.svg", "/reactjs.svg", "/tailwind.svg", "/axios.svg"]}
          started="04/2023"
          ended="05/2023"
        />
        <ExperienceCard
          title="Desenvolvedor Front-End"
          company="Hackthon SERPRO"
          summary="Desenvolvimento de solução para o SERPRO relacionado à compras governamentais utilizando VueJS e CSS."
          techs={["/vuejs.svg", "/css.svg"]}
          started="07/2022"
          ended="07/2022"
        />
        <ExperienceCard
          title="Desenvolvedor Front-End"
          company="Freelancer"
          summary="Planejamento e desenvolvimento de aplicativo web para a realização da eleição da FENADEPOL utilizando HTML, CSS e JavaScript."
          techs={["/html.svg", "/css.svg", "/js.svg"]}
          started="04/2022"
          ended="04/2022"
        />
        <ExperienceCard
          title="Estagiário de Inteligência de Negócios em Tecnologia da Informação"
          company="Ministério da Educacação"
          summary="Consultoria de BI na Diretoria de Desenvolvimento e Saúde e desenvolvimento de painéis utilizando Python e Power BI."
          started="08/2022"
          ended="09/2023"
        />
      </div>
    </motion.div>
  );
};

export default Experience;
