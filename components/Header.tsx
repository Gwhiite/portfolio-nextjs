"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex top-0 p-5 items-center justify-center lg:justify-end max-w-7xl mx-auto z-50">
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
          scale: 0.5,
          rotate: 0.02,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0.02,
        }}
        transition={{
          duration: 1,
        }}
        className="flex items-center">
        <SocialIcon
          url="https://github.com/Gwhiite"
          rel="noopener noreferrer"
          target="_blank"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/guibranco/"
          rel="noopener noreferrer"
          target="_blank"
          fgColor="#0e76a8"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://wa.me/5561933005901"
          rel="noopener noreferrer"
          target="_blank"
          network="whatsapp"
          fgColor="green"
          bgColor="transparent"
        />
      </motion.div>
    </header>
  );
}

export default Header;
