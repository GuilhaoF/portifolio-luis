import { Badge } from "./ui/badge";
import { FaReact, } from 'react-icons/fa'
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiTailwindcss , SiExpo , SiShadcnui} from "react-icons/si";
import { RiNextjsLine, RiFirebaseLine  } from "react-icons/ri";

export function BadgeTechs(){
  const techs = [
    { name: 'React/React Native', Icon: FaReact },
    { name: 'Expo', Icon: SiExpo},
    { name: 'Javascript', Icon: IoLogoJavascript },
    { name: 'Typescript', Icon: SiTypescript },
    { name: 'Nextjs', Icon: RiNextjsLine },
    { name: 'Tailwind Css', Icon: SiTailwindcss},
    { name: 'Shadcn UI', Icon: SiShadcnui},
    { name: 'Firebase', Icon: RiFirebaseLine},
  ];


  return(
    <div className="flex flex-wrap items-center justify-center gap-4 animate-bounce mt-8">
    {techs.map((tech, index) => (
      <Badge key={index} >
        <tech.Icon size={24} />
        <span>{tech.name}</span>
      </Badge>
    ))}
    </div>
  )
}