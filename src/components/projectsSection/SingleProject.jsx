import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

function SingleProject({ name, year, align, image, link }) {
  const isLeft = align === "left";
 
  return (
    <article
      className={`flex flex-col-reverse md:flex-row items-center gap-8 w-full ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Text Content */}
      <div className={`flex flex-col ${isLeft ? "md:items-end" : "md:items-start"} gap-2`}>
        <h2 className="text-2xl font-semibold text-cyan-400">{name}</h2>
        <h3 className={`text-lg text-gray-400 ${isLeft ? "md:text-right" : "md:text-left"}`}>
          {year}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 text-cyan-500 hover:text-cyan-300 transition duration-300 ${
            isLeft ? "justify-start md:justify-end" : "justify-start"
          }`}
        >
          View <BiSolidRightTopArrowCircle size={20} />
        </a>
      </div>

      {/* Project Image */}
      <div className="relative max-w-[500px] max-h-[340px] rounded-xl overflow-hidden border border-cyan-500 shadow-lg group">
        <img
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          src={image}
          alt={`${name} preview`}
        />
        <div className="absolute inset-0 bg-cyan-400/20 group-hover:opacity-0 transition duration-500 hidden md:block"></div>
      </div>
    </article>
  );
}

export default SingleProject;
