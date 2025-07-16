import starlabs from "../assets/starlabs.png"


export type Experience = {
  position : string;
  company: string;
  date: string;
  banner: string;
  alt: string ;
}


export const experience : Experience[] = [
  {
    position : "Software engineering intern",
    company : "Starlabs",
    alt  : "Starlabs logo",
    date: "Jan 2024 - Apr 2024",
    banner : starlabs as string
  }
]

