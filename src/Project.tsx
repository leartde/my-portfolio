type ProjectProps = {
  title: string;
  banner: string;
  date: string;
  description: string;
  technologies: string[];
  url: string;
}

const Project = ({title, banner, date, description, technologies, url}: ProjectProps)=>{
    return (
      <a target="_blank" href={url} className="space-y-2 hover:shadow-lg hover:scale-[1.02] border border-gray-400/80 shadow-md  rounded-md">
          <div className="w-full h-48">
            <img alt="banner" className="w-full h-full"  src={banner}/>
          </div>
        <div className="p-2 space-y-2">
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-sm">{date}</p>
          <p className="text-gray-900/70 text-sm">{description}</p>
          <div className="flex flex-wrap gap-1">
            {technologies.map((technology) => (
              <p id={technology} className=" border p-1 border-gray-800/70 text-sm rounded-lg">
                {technology}
              </p>
            ))}
          </div>
        </div>
      </a>
    )
}


export default Project;
