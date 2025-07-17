import type { Project } from "./data/projects.ts";

const ProjectCard = ({project, dark}: { project: Project, dark:boolean })=>{
    return (
      <div  className="space-y-2 hover:shadow-lg hover:scale-[1.02] border border-gray-400/80 shadow-md  rounded-md">
          <div className="w-full h-48">
            <a target="_blank" href={project.url}>
              <img alt="ProjectCard banner" className="w-full h-full" src={project.banner}/>
            </a>
          </div>
        <div className="p-2 space-y-2">
          <h3 className="font-medium text-lg">{project.title}</h3>
          <p className="text-sm">{project.date}</p>
          <p className={`${dark?'text-gray-300/90':'text-gray-900/70'} text-sm`}>{project.description}</p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((technology) => (
              <p id={technology} className={`border p-1 ${dark?'border-gray-300/70':'border-gray-800/70'} text-sm rounded-lg`}>
                {technology}
              </p>
            ))}
          </div>
        </div>
      </div>
    )
}


export default ProjectCard;
