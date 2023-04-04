import React from "react";
import pic from "../../public/picture.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col text-center md:text-left relative md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg "
      >
        <Image src={pic} alt="Foto" />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-sembold ">
          Um pouco{" "}
          <span className="underline decoration-[#dc143c] ">sobre</span>
        </h4>
        <p className="text-base">
          Comecei a desenvolver com 17 anos, e me encontrei na área desde o
          princípio. Tenho foco em adquirir as habilidades necessárias para me
          tornar um profissional flexível que consegue ser últil de várias
          formas em uma mesma equipe. Sou comunicavo e proativo, buscando sempre
          agregar posivamente na experiência do usuário e de meus colegas.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
