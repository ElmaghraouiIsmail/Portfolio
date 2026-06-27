import React from "react";
import tourisme from "../assets/tourismephoto.png";
import film from "../assets/filmphoto.jpeg";
import portfolio from "../assets/portfolio.png";
import bank1 from "../assets/bank1.png";

const Projects = [
  {
    id: 1,
    name: "Bank Management System",
    description:
      "A full-stack banking application for customer management, account operations and secure authentication.",
    image: bank1,
    github: "https://github.com/Youafkhan1",
    demo: "#",
    technologies: ["React", "Spring Boot", "MySQL"],
  },
  {
    id: 2,
    name: "Personal Portfolio",
    description:
      "A modern responsive portfolio showcasing my projects, skills and contact information.",
    image: portfolio,
    github: "https://github.com/Youafkhan1",
    demo: "#",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    id: 3,
    name: "Movie Application",
    description:
      "Movie discovery application with search, ratings and detailed information using a public API.",
    image: film,
    github: "https://github.com/Youafkhan1",
    demo: "#",
    technologies: ["Flutter", "API", "Dart"],
  },
  {
    id: 4,
    name: "Smart Tourism",
    description:
      "An intelligent tourism application that recommends personalized destinations using AI.",
    image: tourisme,
    github: "https://github.com/Youafkhan1",
    demo: "#",
    technologies: ["React Native", "Spring Boot", "AI"],
  },
];

const Project = () => {
  return (
    <section className="bg-black text-white py-20" id="Project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-14">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Projects
          </span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-green-400 hover:-translate-y-2 hover:shadow-green-500/20 transition-all duration-500"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-400 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-400 to-blue-500 px-5 py-2 rounded-full hover:scale-105 transition-transform duration-300"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 px-5 py-2 rounded-full hover:border-green-400 hover:text-green-400 transition duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;