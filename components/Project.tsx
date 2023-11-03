import Image from "next/image";
import React from "react";

type Props = {
  img: string;
  title: string;
  source: Array<string>;
  summary: string;
};

const Project = ({ img, title, source, summary }: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5">
      <Image src={img} alt="project image" width={600} height={600} />
      <div className="space-y-6 px-0 max-w-6xl">
        <h4 className="text-4xl text-center font-semibold">{title}</h4>
        <p className="text-center">{summary}</p>
        <div className="flex space-x-4 justify-center items-center">
          {source.map((item) => (
            <Image src={item} alt="skill used" width={40} height={40} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
