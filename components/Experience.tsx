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
        rotate: 0.02,
      }}
      whileInView={{
        opacity: 1,
        rotate: 0.02,
      }}
      className="h-screen py-24 flex duration-[1s] overflow-hidden flex-col text-left md:flew-row max-w-full px-5 justify-center space-y-8 mx-auto items-center">
      <h1 className="title">Experience</h1>
      <div className="w-full flex space-x-5 overflow-x-scroll p-5 snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ba110c]/80">
        <ExperienceCard
          title="Front-End Developer"
          company="Labz Digital"
          summary="Developer responsible for the layout of pages using VueJS, ReactJS, TailwindCSS, and Axios."
          techs={["/vuejs.svg", "/reactjs.svg", "/tailwind.svg", "/axios.svg"]}
          started="04/2023"
          ended="05/2023"
        />
        <ExperienceCard
          title="Front-End Developer"
          company="Hackathon SERPRO"
          summary="Development of a solution for SERPRO related to government procurement using VueJS and CSS."
          techs={["/vuejs.svg", "/css.svg"]}
          started="07/2022"
          ended="07/2022"
        />
        <ExperienceCard
          title="Front-End Developer"
          company="Freelancer"
          summary="Planning and development of a web application for conducting the FENADEPOL election using HTML, CSS, and JavaScript."
          techs={["/html.svg", "/css.svg", "/js.svg"]}
          started="04/2022"
          ended="04/2022"
        />
        <ExperienceCard
          title="Business Intelligence Intern"
          company="Ministry of Education"
          summary="B.I consultancy in the Directorate of Development and Health and development of dashboards using Python and Power BI."
          techs={["/python.svg", "/google.svg", "/moffice.svg", "/bi.svg"]}
          started="08/2022"
          ended="09/2023"
        />
      </div>
    </motion.div>
  );
};

export default Experience;
