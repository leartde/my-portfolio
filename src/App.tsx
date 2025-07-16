import { FaMailBulk } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { projects } from "./data/projects.ts";
import { experience } from "./data/experience.ts";
import { education } from "./data/education.ts";
import { skills } from "./data/skills.ts";
import ProjectCard from "./ProjectCard.tsx";
function App() {


  return (
    <div className="lg:w-1/2 mx-auto text-[#141414] py-8 px-4 space-y-6">

      <div className=" flex flex-col">
        <h1 className="font-bold text-5xl ">
          Hello, I'm Leart Dellova
        </h1>
        <p className="text-lg font-medium">
          I'm a software developer passionate about C# and TypeScript, with a focus on full-stack apps using ASP.NET Core and React. I'm also eager to explore new backend technologies and continuously expand my skill set.
        </p>

      </div>


      <div className="space-x-2">
        <h3 className="font-bold text-2xl">Experience</h3>
        {experience.map((exp, index) => (
          <div key={index} className="flex items-center gap-2 p-2">
            <img className="border-gray-600/80 border w-12 h-12 rounded-full" alt={exp.alt}
                 src={exp.banner}/>
            <div className="flex flex-col gap-1 text-sm">
              <p className="font-medium">{exp.position} at {exp.company}</p>
              <p className="text-gray-700/70">{exp.date}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="space-x-2">
        <h3 className="font-bold text-2xl">Education</h3>
        {education.map((edu, index)=> (
          <div key={index} className="flex items-center gap-2 p-2">
            <img className="border-gray-600/80 border w-12 h-12 rounded-full" alt={edu.alt}
                 src={edu.banner}/>
            <div className="flex flex-col gap-1 text-sm">
              <p className="font-medium">{edu.description} at {edu.institution}</p>
              <p className="text-gray-700/70">{edu.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 ">
        <h3 className="font-bold text-2xl">Skills</h3>
        <div className="flex flex-wrap gap-2 w-3/4">
          {skills.map((skill) => (
            <p id={skill} className="border font-medium text-sm border-gray-900/80 p-1 rounded-lg">{skill}</p>
          ))}
        </div>
      </div>


      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-2xl">My projects</h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

          {projects.map((project)=>(
            <ProjectCard key={project.url} project={project}/>
          ))}
        </div>
      </div>



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
    </div>
  )
}

export default App
