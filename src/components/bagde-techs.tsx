import { Badge } from "./ui/badge";
import { FaReact, } from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiTailwindcss , SiExpo , SiShadcnui , SiSass, SiJest} from "react-icons/si";
import { RiNextjsLine, RiFirebaseLine  } from "react-icons/ri";

export function BadgeTechs(){
  const techs = [
    { name: 'React/React Native', Icon: FaReact },
    { name: 'Expo', Icon: SiExpo},
    { name: 'Javascript', Icon: IoLogoJavascript },
    { name: 'Typescript', Icon: SiTypescript },
    { name: 'Nextjs', Icon: RiNextjsLine },
    { name: 'Tailwind Css', Icon: SiTailwindcss},
    { name: 'Sass', Icon: SiSass},
    { name: 'Shadcn UI', Icon: SiShadcnui},
    { name: 'Firebase', Icon: RiFirebaseLine},
    { name: 'Jest', Icon: SiJest },

  ];


  return(
    <div className="grid grid-cols-2 gap-4 mt-8">
    {techs.map((tech, index) => (
      <Badge key={index} >
        <tech.Icon size={32} />
        <span className="ml-4 text-lg">{tech.name}</span>
      </Badge>
    ))}
    </div>
  )
}