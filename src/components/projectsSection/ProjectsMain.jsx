import React, { useState, useEffect, useRef } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";

const projects = [
  {
    name: "Expense Tracker",
    year: "Sept 2025",
    align: "left",
     image: "../../public/images/project1.png", // ✅ Fixed path
    link: "https://expense-tracker-six-sepia.vercel.app/",
    description: "A comprehensive expense tracking application with analytics and budgeting features",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"]
  },
  {
    name: "Recipe-finder",
    year: "Aug 2025",
    align: "right",
    image: "../../public/images/project2.png", // ✅ Fixed path
    link: "https://recipe-finder-app-belema.vercel.app/",
    description: "Discover and save your favorite recipes with advanced filtering and search",
    tech: ["React", "API Integration", "Tailwind CSS", "Context API"]
  },
  {
    name: "Shopping app",
    year: "July 2025",
    align: "left",
    image: "../../public/images/project3.png", // ✅ Fixed path
    link: "https://shop-n-enjoy.vercel.app/",
    description: "E-commerce platform with cart functionality and secure payments",
    tech: ["React", "Redux", "Stripe", "Firebase"]
  },
  {
    name: "Portfolio",
    year: "June 2025",
    align: "right",
    image: "../../public/images/project4.png", // ✅ Fixed path
    link: "https://belemagirma.vercel.app/",
    description: "Modern responsive portfolio showcasing my work and skills",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"]
  },
];

function ProjectsMain() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative mt-20 px-6 py-20 bg-black text-white overflow-hidden"
    >
      {/* Background Animated Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-[1200px] mx-auto">
        <ProjectsText isVisible={isVisible} />
        <div className="flex flex-col gap-32 mt-20">
          {projects.map((project, index) => (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              image={project.image}
              link={project.link}
              align={project.align}
              description={project.description}
              tech={project.tech}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsMain;