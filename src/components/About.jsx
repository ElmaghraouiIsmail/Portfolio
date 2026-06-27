import React from "react";

const skills = [
  { name: "HTML, CSS & JavaScript", level: "90%" },
  { name: "Java & Dart", level: "90%" },
  { name: "Spring Boot", level: "95%" },
  { name: "Flutter", level: "85%" },
  { name: "React & React Native", level: "95%" },
];

const About = () => {
  return (
    <section className="bg-black text-white py-20" id="About">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        <h2 className="text-4xl font-bold text-center mb-14">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Me
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <div className="inline-block px-5 py-2 rounded-full border border-green-400 text-green-400 bg-green-500/10 mb-6">
              Software Engineering Student
            </div>

            <h3 className="text-3xl font-bold mb-6">
              Passionate about creating innovative software solutions.
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              I'm <span className="text-white font-semibold">Ismail Elmahraoui</span>,
              a third-year Software Engineering student at ENIAD Berkane.
              I enjoy developing scalable web and mobile applications while
              continuously improving my technical skills.
            </p>

            <p className="text-gray-400 leading-8">
              My interests include Full-Stack Development, Mobile Development,
              Artificial Intelligence and Business Intelligence. I enjoy
              transforming ideas into real applications with clean code and
              modern technologies.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg">

            <h3 className="text-2xl font-bold mb-8">
              Technical Skills
            </h3>

            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span className="text-green-400">{skill.level}</span>
                </div>

                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center hover:border-green-400 transition duration-300">
            <h3 className="text-4xl font-bold text-green-400">3+</h3>
            <p className="text-gray-400 mt-3">Years Learning</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center hover:border-green-400 transition duration-300">
            <h3 className="text-4xl font-bold text-green-400">10+</h3>
            <p className="text-gray-400 mt-3">Projects Completed</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center hover:border-green-400 transition duration-300">
            <h3 className="text-4xl font-bold text-green-400">8+</h3>
            <p className="text-gray-400 mt-3">Technologies</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center hover:border-green-400 transition duration-300">
            <h3 className="text-4xl font-bold text-green-400">100%</h3>
            <p className="text-gray-400 mt-3">Motivation</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;