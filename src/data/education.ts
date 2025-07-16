import ubt from "../assets/ubt.png";
import digital_school from "../assets/digital-school.jpg"

export type Education = {
  institution : string;
  description : string;
  date: string;
  banner: string;
  alt: string;
}

export const education : Education[] = [
  {
    institution : "Digital School",
    description : "Front end development course",
    date : "Nov 2019 - Jun 2020",
    banner : digital_school as string,
    alt: "Digital School logo"
  },
  {
    institution : "UBT",
    description : "Bachelors degree in Computer Science and Engineering",
    date : "Sep 2021 - Sep 2024",
    banner : ubt as string,
    alt : "UBT logo"
  }

]


