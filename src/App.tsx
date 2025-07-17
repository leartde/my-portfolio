import { FaMailBulk } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { projects } from "./data/projects.ts";
import { experience } from "./data/experience.ts";
import { education } from "./data/education.ts";
import { skills } from "./data/skills.ts";
import ProjectCard from "./ProjectCard.tsx";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import FadeInWhenVisible from "./FadeInWhenVisible.tsx";
function App() {
 const [dark, setDark] = useState(false);
  useEffect(() => {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      setDark(mediaQuery.matches);

      const handleChange = (event: MediaQueryListEvent) => {
        setDark(event.matches);
      };

      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);

  return (
    <div className={`${dark ? 'bg-[#141414] text-white' : 'bg-white text-[#141414]'}`}>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDark((prev) => !prev)}
          className={`${dark ? 'bg-gray-800' : 'bg-gray-200'} hover:scale-[1.1] cursor-pointer p-2 rounded-full shadow-md`}
          aria-label="Toggle Dark Mode"
        >
          {dark ? "🌙" : "🌞"}
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="lg:w-1/2 mx-auto py-8 px-4 space-y-6"
      >

        <div className=" flex flex-col">
          <h1 className="font-bold text-5xl ">
            Hello, I'm Leart Dellova
          </h1>
          <p className="text-lg font-medium">
            I'm a software developer passionate about C# and TypeScript, with a focus on full-stack apps using ASP.NET
            Core and React. I'm also eager to explore new backend technologies and continuously expand my skill set.
          </p>

        </div>


        <FadeInWhenVisible>
          <div className="space-x-2">
            <h3 className="font-bold text-2xl">Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className="flex items-center gap-2 p-2">
                <img className={`border ${dark ? 'border-gray-300/80' : 'border-gray-600/80'} w-12 h-12 rounded-full`}
                     alt={exp.alt}
                     src={exp.banner}/>
                <div className="flex flex-col gap-1 text-sm">
                  <p className="font-medium">{exp.position} at {exp.company}</p>
                  <p className={`${dark ? 'text-gray-300/70' : 'text-gray-700/70'}`}>{exp.date}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>


        <FadeInWhenVisible>
          <div className="space-x-2">
            <h3 className="font-bold text-2xl">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="flex items-center gap-2 p-2">
                <img className={`border ${dark ? 'text-gray-300/70' : 'text-gray-700/70'}  w-12 h-12 rounded-full`}
                     alt={edu.alt}
                     src={edu.banner}/>
                <div className="flex flex-col gap-1 text-sm">
                  <p className="font-medium">{edu.description} at {edu.institution}</p>
                  <p className={`${dark ? 'text-gray-300/70' : 'text-gray-700/70'}`}>{edu.date}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="flex flex-col gap-2 ">
            <h3 className="font-bold text-2xl">Skills</h3>
            <div className="flex flex-wrap gap-2 w-3/4">
              {skills.map((skill) => (
                <p id={skill}
                   className={`border font-medium text-sm ${dark ? 'border-gray-300/70' : 'border-gray-900/80'} p-1 rounded-lg`}>{skill}</p>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>


        <FadeInWhenVisible>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-2xl">My projects</h3>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

              {projects.map((project) => (
                <ProjectCard dark={dark} key={project.url} project={project}/>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>


        <FadeInWhenVisible>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-2xl">Contact Me</h3>
            <div className="flex items-center text-lg gap-1">
              <FaMailBulk/>
              <address>leartdell@gmail.com</address>
            </div>
            <div className="flex items-center gap-1 text-lg">
              <FaGithub/>
              <a href="https://github.com/leartde">leartde</a>
            </div>
            <div className="flex items-center gap-1 text-lg">
              <FaLinkedin/>
              <a href="https://www.linkedin.com/in/leart-dellova-885b57273/">leart-dellova</a>
            </div>
          </div>
        </FadeInWhenVisible>
      </motion.div>
    </div>
  )
}

export default App
