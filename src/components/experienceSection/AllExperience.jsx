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
  },
];

function AllExperience() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <FaArrowRight
              className="text-5xl text-cyan-400 opacity-60 hidden lg:block drop-shadow-[0_0_8px_#00FFFF]"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default AllExperience;
