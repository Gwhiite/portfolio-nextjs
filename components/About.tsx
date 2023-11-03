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
      className="h-screen flex flex-col text-center max-w-7xl px-5 justify-center space-y-8 mx-auto items-center"
    >
      <h3 className="title">Sobre</h3>
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
            Olá, me chamo Guilherme Branco De Campos, e esse é o meu Portfolio
            feito com <span className="text-[#ba110c]">NextJS</span>. Desde novo
            busquei aprender coisas novas fora dos estudos convencionais, e com
            isso, cai na área de Tecnologia da Informação. Me encontrei na área
            desde o princípio, tendo como base a minha curiosidade para entender
            como as coisas funcionam e se relacionam. Acredito que o sucesso
            existe na proatividade e busca pelo conhecimento, não me contento em
            somente conseguir realizar uma tarefa ou resolver um problema, gosto
            de entender a fundo como o problema ocorreu e assim evita-lo
            <span className="text-[#ba110c]">.</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
