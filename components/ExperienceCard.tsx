"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  company: string;
  summary: string;
  techs?: Array<string>;
  started: string;
  ended: string;
};

const ExperienceCard = ({
  title,
  company,
  summary,
  techs,
  started,
  ended,
}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-5 py-7 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="px-0 md:px-5">
        <h4 className="text-3xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          {techs?.map((tech) => (
            <Image src={tech} alt="skill used" width={40} height={40} />
          ))}
        </div>
        <p className="uppercase py-5">
          {started} - {ended}
        </p>
        <p className="text-lg">{summary}</p>
      </div>
    </article>
  );
};

export default ExperienceCard;