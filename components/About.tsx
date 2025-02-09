"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.25,
      }}
      className="h-screen py-24 flex flex-col text-center max-w-7xl px-5 justify-center space-y-8 mx-auto items-center">
      <h1 className="title">Sobre</h1>
      <div className="lg:text-left flex flex-col items-center lg:flex-row">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          src={"/about.svg"}
          alt="Coding pic"
          className="w-40 h-40 flex-shrink-0 rounded-full md:rounded-lg md:w-64 md:h-64 xl:w-80 xl:h-80"
        />

        <div className="px-5">
          <p className="text-sm md:text-base xl:text-lg text-justify">
            Olá, me chamo Guilherme Branco De Campos, e este é o meu portfólio
            responsivo, desenvolvido com{" "}
            <span className="text-[#ba110c]">Next.JS</span> e{" "}
            <span className="text-[#ba110c]">Tailwind CSS</span>, utilizando o
            GitHub como repositório e realizando o deploy com a Vercel. Desde
            cedo, sempre busquei aprender coisas novas além dos estudos
            convencionais, o que me levou à área de Tecnologia da Informação.
            Desde o início, me identifiquei com a área, impulsionado pela minha
            curiosidade em entender como as coisas funcionam e se relacionam.
            Acredito que o sucesso está na proatividade e na busca constante
            pelo conhecimento. Não me contento apenas em realizar uma tarefa ou
            resolver um problema; gosto de entender a fundo como ele ocorreu
            para evitar que se repita.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
