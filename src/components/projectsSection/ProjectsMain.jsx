import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Expense Tracker",
    year: "Sept 2025",
    align: "left",
    image: "../../public/images/project1.png",
    link: "https://expense-tracker-six-sepia.vercel.app/",
  },
  {
    name: "Portfolio Website",
    year: "Aug 2025",
    align: "right",
    image: "../../public/images/project1.png",
    link: "#",
  },
  {
    name: "Task Manager App",
    year: "July 2025",
    align: "left",
    image: "../../public/images/project1.png",
    link: "#",
  },
  {
    name: "E-commerce Clone",
    year: "June 2025",
    align: "right",
    image: "../../public/images/project1.png",
    link: "#",
  },
];

function ProjectsMain() {
  return (
    <section id="projects" className="mt-20 px-6 py-20 bg-black text-white">
      <ProjectsText />
      <div className="flex flex-col gap-20 mt-12">
        {projects.map(({ name, year, image, link, align }, index) => (
          <SingleProject
            key={index}
            name={name}
            year={year}
            image={image}
            link={link}
            align={align}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsMain;
