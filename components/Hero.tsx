"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import { useTranslations } from "next-intl";

type Props = {};

function Hero({}: Props) {
  const t = useTranslations();

  const [text, count] = useTypewriter({
    words: [t("greeting"), "Sic Parvis Magna"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <Header />
      <motion.div className="h-screen pt-10 min-[400px]:pt-24 md:pt-48 flex flex-col space-y-8 items-center text-center overflow-hidden">
        <BackgroundCircles />
        <Image
          priority={true}
          src={"/profile.jpg"}
          alt="Profile Pic"
          className="relative rounded-full mx-auto object-cover"
          width={128}
          height={128}
        />
        <div className="z-20">
          <h2 className="text-xs sm:text-sm uppercase text-gray-200 pb-2 tracking-[10px]">
            {t("title")}
          </h2>
          <h1 className="text-3xl lg:text-5xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#ba110c" />
          </h1>
          <div className="pt-5 flex flex-col items-center justify-center space-y-2 md:space-y-0 md:space-x-4 md:flex-row">
            <Link href="#about">
              <button className="heroButton">{t("about")}</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">{t("experience")}</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">{t("skills")}</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">{t("projects")}</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
