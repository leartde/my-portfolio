import Project from "./Project.tsx";
import { FaMailBulk } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import starlabs from "./assets/starlabs.png"
import ubt from "./assets/ubt.png";
import jobsync from "./assets/jobs.png";
import techinsight from "./assets/techinsight.png";
import wordle from "./assets/wordle.png";
import internstellar from "./assets/internstellar.png";
function App() {
  const skills = ["C#","ASP.NET Core","Java","TypeScript","PHP","HTML","CSS",
  "React","Tailwind","Laravel","SQL","Redis"];

  return (
    <div className="lg:w-1/2 mx-auto text-[#141414] py-8 px-4 space-y-6">

      {/*HEADER*/}
      <div className=" flex flex-col">
        <h1 className="font-bold text-5xl ">
          Hi, I'm Leart Dellova
        </h1>
        <p className="text-lg font-medium">I'm a software developer with a strong interest
          in C# and Typescript. I enjoy building full stack web applications with ASP.NET Core
          in the backend and React in the frontend.
        </p>
      </div>

      {/*EXPERIENCE*/}
      <div className="space-x-2">
        <h3 className="font-bold text-2xl">Experience</h3>
        <div className="flex items-center gap-2 p-2">
          <img className="border-gray-600/80 border w-12 h-12 rounded-full" alt="Starlabs Logo"
               src={starlabs}/>
          <div className="flex flex-col gap-1 text-sm">
            <p className="font-medium">Software engineering intern at StarLabs</p>
            <p className="text-gray-700/70">Jan 2024 - April 2024</p>
          </div>
        </div>
      </div>

      {/*EDUCATION*/}
      <div className="space-x-2">
        <h3 className="font-bold text-2xl">Education</h3>
        <div className="flex items-center gap-2 p-2">
          <img className="border-gray-600/80 border w-12 h-12 rounded-full" alt="Ubt Logo"
               src={ubt}/>
          <div className="flex flex-col gap-1 text-sm">
            <p className="font-medium">Bachelors degree in Computer Science and Engineering at UBT</p>
            <p className="text-gray-700/70">Sep 2021 - Sep 2024</p>
          </div>
        </div>
      </div>

      {/*SKILLS*/}
      <div className="flex flex-col gap-2 ">
        <h3 className="font-bold text-2xl">Skills</h3>
        <div className="flex flex-wrap gap-2 w-3/4">
          {skills.map((skill)=> (
            <p id={skill} className="border font-medium text-sm border-gray-900/80 p-1 rounded-lg">{skill}</p>
          ))}
        </div>
      </div>


      {/*PROJECTS*/}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-2xl">My projects</h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <Project title="JobSync" banner={jobsync} date="Mar 2025 - Jun 2025"
                   description="A modern job marketplace web application built with ASP.NET Core Web API, React.js, TypeScript, and TailwindCSS." technologies={
            ["ASP.NET Core","Entity Framework","SQL Server","Redis","React","TypeScript","Tailwind","Cloudinary","JWT","MailTrap"]
          } url="https://github.com/leartde/job-sync"/>
          <Project title="TechInsight" banner={techinsight} date="Mar 2025 - Jun 2025"
                   description="A comprehensive blogging platform  designed to share knowledge on a wide array of technology topics." technologies={
            ["ASP.NET Core","Entity Framework","SQL Server","React","JavaScript","Tailwind"]
          } url="https://github.com/leartde/TechInsight"/>
          <Project title="Wordle Clone" banner={wordle} date="Jun 2025" description="A clone of the popular puzzle game 'Wordle' built with React. "  technologies={["React","TypeScript"]}
                   url="https://leartde.github.io/wordle-copy/"/>
          <Project title="Hotel Management System" banner={internstellar} date="Jan 2024 - Apr 2024" description="Contributed on a system to manage hotel bookings during my internship at StarLabs."
                   technologies={["ASP.NET Core MVC","Bootstrap","Stripe","MailTrap"]}
                   url="https://github.com/MensurH/internstellar-hotel-management-system/tree/main/Domain"/>
        </div>
      </div>


      {/*CONTACT*/}
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
