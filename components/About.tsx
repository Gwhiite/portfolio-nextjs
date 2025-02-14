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
        rotate: 0.02,
      }}
      whileInView={{
        opacity: 1,
        rotate: 0.02,
      }}
      className="h-screen py-24 flex flex-col duration-[1.25s] text-center max-w-7xl px-5 justify-center space-y-8 mx-auto items-center">
      <h1 className="title">Sobre</h1>
      <div className="lg:text-left flex flex-col items-center lg:flex-row">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
            scale: 0.5,
            rotate: 0.02,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
            rotate: 0.02,
          }}
          transition={{
            duration: 1,
          }}
          src={"/about.svg"}
          alt="Coding pic"
          className="w-40 h-40 flex-shrink-0 rounded-full md:rounded-lg md:w-64 md:h-64 xl:w-80 xl:h-80"
        />

        <div className="px-5">
          <p className="text-sm md:text-base xl:text-xl text-justify">
            Olá! Meu nome é Guilherme Branco De Campos, sou profissional de TI
            com experiência em BI e desenvolvimento web. Cursei Bacharelado em
            Ciência da Computação e possuo formação técnica em Informática. Este
            portfólio responsivo foi desenvolvido com Next.js e Tailwind CSS,
            utilizando GitHub como repositório e deploy via Vercel. Sou movido
            pela curiosidade, proatividade e busca constante por conhecimento,
            sempre buscando entender e otimizar processos.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
