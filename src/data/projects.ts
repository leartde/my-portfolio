import jobsync from "../assets/jobs.png";
import techinsight from "../assets/techinsight.png";
import wordle from "../assets/wordle.png";
import internstellar from "../assets/internstellar.png";
import snippetbox from "../assets/snippetbox.png"

export type Project = {
  title: string;
  banner: string;
  date: string;
  description: string;
  technologies: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Jobsync",
    description: "A modern job marketplace web application built with ASP.NET Core Web API, React.js, TypeScript, and TailwindCSS.",
    technologies: ["ASP.NET Core", "Entity Framework", "SQL Server", "Redis", "React", "TypeScript", "Tailwind", "Cloudinary", "JWT", "MailTrap"],
    banner: jobsync as string,
    url: "https://github.com/leartde/job-sync",
    date: "Mar 2025 - Jun 2025"
  },
  {
    title: "TechInsight",
    description: "A comprehensive blogging platform designed to share knowledge on a wide array of technology topics.",
    technologies: ["ASP.NET Core", "Entity Framework", "SQL Server", "React", "JavaScript", "Tailwind"],
    banner: techinsight as string,
    url: "https://github.com/leartde/TechInsight",
    date: "Mar 2024 - Jun 2024"
  },
  {
    title: "SnippetBox",
    description: "A secure and performant web application for sharing snippets of text, built in Go. Features include user authentication, session management, CSRF protection, and a MySQL-backed data layer.",
    technologies: ["Go", "MySQL", "HTML", "CSS", "Net/HTTP", "Secure Cookies", "CSRF Protection"],
    banner: snippetbox as string,
    url: "https://github.com/leartde/snippetbox",
    date: "Jul 2025"
  },
  {
    title: "Wordle Clone",
    description: "A clone of the popular puzzle game 'Wordle' built with React.",
    technologies: ["React", "TypeScript"],
    banner: wordle as string,
    url: "https://leartde.github.io/wordle-copy/",
    date: "Jun 2025"
  },
  {
    title: "Hotel Management System",
    description: "Contributed on a system to manage hotel bookings during my internship at StarLabs.",
    technologies: ["ASP.NET Core MVC", "Bootstrap", "Stripe", "MailTrap"],
    banner: internstellar as string,
    url: "https://github.com/MensurH/internstellar-hotel-management-system",
    date: "Jan 2024 - Apr 2024"
  }
];

