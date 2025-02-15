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
      <h1 className="title">About</h1>
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
            Greetings! My name is Guilherme Branco De Campos, I am an IT
            professional with experience in BI and web development. I have a
            Bachelor's degree in Computer Science and a technical degree in
            Informatics. This responsive portfolio was developed with Next.js,
            Tailwind CSS, Framer Motion, using GitHub as a repository and
            deployed via Vercel. I am driven by curiosity, proactivity, and a
            constant quest for knowledge, always seeking to understand and
            optimize processes.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
