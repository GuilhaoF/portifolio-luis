import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ChevronsRight, Globe } from "lucide-react";
import { RiSmartphoneLine } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { projects } from "@/data/projects-data";

interface TypeProject {
  name: string;
  link: string;
  icon: "Web" | "Mobile" | "";
}
export function RecentProjects() {
 

  return (
    <Card className="shadow-lg md:col-span-2">
      <CardHeader>
        <CardTitle className="mb-4">5 Projetos mais recentes</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {projects.slice(0,5).map((project, index) => (
          <div key={project.name} className="flex items-center gap-4">
            <div className="flex items-center justify-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span className="text-sm">
                      {project.icon === "Web" ? (
                        <Globe size={24} />
                      ) : (
                        <RiSmartphoneLine size={24} />
                      )}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">
                      {project.icon === "Web"
                        ? "Projeto Web"
                        : "Projeto Mobile"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src={`/avatars/0${index + 1}.png`} alt="Avatar" />
              <AvatarFallback>
                {project.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{project.name}</p>
            </div>
            <Link
              href={project.link}
              className="ml-auto font-medium hover:text-green-600 hover:opacity-0 animate-pulse opacity-10"
            >
              <ChevronsRight size={28} />
            </Link>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
