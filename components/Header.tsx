"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex top-0 p-5 items-center justify-center lg:justify-end max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.25,
        }}
        className="flex items-center"
      >
        <SocialIcon
          url="https://github.com/Gwhiite"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/guibranco/"
          fgColor="#0e76a8"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://wa.me/5561992039009"
          network="whatsapp"
          fgColor="green"
          bgColor="transparent"
        />
        <SocialIcon network="email" bgColor="transparent" />
      </motion.div>
    </header>
  );
}

export default Header;