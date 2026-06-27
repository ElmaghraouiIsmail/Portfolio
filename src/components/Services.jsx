import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaChartBar,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building modern, responsive and high-performance web applications using React, Spring Boot and modern technologies.",
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Creating intuitive Android and cross-platform mobile applications with React Native and modern UI design.",
    icon: <FaMobileAlt />,
  },
  {
    id: 3,
    title: "Data Analysis & BI",
    description:
      "Collecting, transforming and visualizing data through ETL processes, Data Warehouses and interactive dashboards.",
    icon: <FaChartBar />,
  },
  {
    id: 4,
    title: "AI & Prompt Engineering",
    description:
      "Designing effective prompts and integrating AI solutions using Machine Learning, Deep Learning and Generative AI.",
    icon: <FaRobot />,
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-20" id="Service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-14">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Services
          </span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8
              hover:border-green-400 hover:-translate-y-2
              hover:shadow-lg hover:shadow-green-500/20
              transition-all duration-500"
            >
              <div className="flex justify-between items-center mb-6">
                <div
                  className="w-16 h-16 rounded-full bg-gradient-to-r
                  from-green-400 to-blue-500 flex items-center
                  justify-center text-3xl text-white"
                >
                  {service.icon}
                </div>

                <span className="text-5xl font-bold text-gray-700">
                  0{service.id}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {service.description}
              </p>

              <button
                className="flex items-center gap-2
                text-green-400 hover:text-blue-400
                transition duration-300"
              >
                Learn More
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;