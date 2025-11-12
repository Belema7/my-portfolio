import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa6";

const experiences = [
  {
    job: "Front-End Developer",
    company: "",
    date: "2023 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large-scale applications.",
      "Improving web performance.",
      "Generating new ideas for better user experience.",
    ],
    icon: "🎨",
    color: "#15d1e9"
  },
  {
    job: "Back-End Developer",
    company: "",
    date: "2023 - Present",
    responsibilities: [
      "Designing and implementing RESTful APIs.",
      "Managing databases and ensuring data integrity.",
      "Integrating third-party services and APIs.",
      "Enhancing scalability and security.",
      "Optimizing server-side performance.",
    ],
    icon: "⚙️",
    color: "#00e5ff"
  },
  {
    job: "Full-Stack Developer",
    company: "",
    date: "2024 - Present",
    responsibilities: [
      "Building and maintaining full-stack applications.",
      "Collaborating across teams for end-to-end solutions.",
      "Deploying apps on cloud platforms.",
      "Ensuring seamless front-end/back-end communication.",
      "Debugging and resolving cross-stack issues.",
    ],
    icon: "🚀",
    color: "#00b8cc"
  },
];

function AllExperience({ isVisible }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience 
            experience={experience} 
            index={index}
            isVisible={isVisible}
          />
          {index < experiences.length - 1 && (
            <FaArrowRight
              className={`text-4xl text-cyan-400 opacity-60 hidden lg:block drop-shadow-[0_0_8px_#00FFFF] transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ transitionDelay: `${index * 200 + 600}ms` }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default AllExperience;