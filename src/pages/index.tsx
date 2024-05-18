import Layout from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Hero from "../assets/Hero.jpg";
import { BadgeTechs } from "@/components/bagde-techs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RecentProjects } from "@/components/recent-projects";

export default function Home() {
  return (
    <Layout>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-1 md:gap-8 lg:grid-cols-3">
          {/* CARD DE BREVE RESUMO  */}
          <Card className="flex items-center justify-center flex-col space-y-2 shadow-lg">
            <CardHeader>
              <CardTitle className="font-bold text-xl sm:text-2xl md:text-3xl">
                Luis Felipe G
              </CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg">
                Desenvolvedor Front-End e Mobile
              </CardDescription>
            </CardHeader>
            <Image
              src={Hero}
              alt="avatar"
              className="object-cover w-56 lg:w-1/2 h-1/2 mx-2 rounded-full border-4 border-green-600"
            />
            <CardContent className="flex items-center flex-col text-center text-lg space-y-6">
              <div className="">
                Meu objetivo principal é criar experiências digitais que cativem
                os usuários e proporcionem uma jornada suave e agradável. Como
                um desenvolvedor front-end e mobile, minha especialidade está em
                traduzir designs e conceitos em código, combinando todas as
                tecnologias listadas nesse portifolio para dar vida a websites e
                aplicativos.
              </div>
            </CardContent>
          </Card>

          {/* CARD DE TECNOLOGIAS */}
          <Card className="shadow-lg">
            <CardContent>
              <CardDescription className="text-3xl font-bold text-center mt-6">
                Tecnologias
              </CardDescription>
              <div className="mt-8">
                <BadgeTechs />
              </div>
            </CardContent>
          </Card>

          {/* CARD DE PROJETOS RECENTES */}
          <RecentProjects />

          {/* CARD REDES SOCIAIS */}

          {/* <Card>
            <CardContent>
              <CardDescription className="text-3xl font-bold text-center mt-6">
                Tecnologias
              </CardDescription>
              <div className="mt-8">
                <BadgeTechs />
              </div>
            </CardContent>
          </Card> */}

         
        </div>
      </main>
    </Layout>
  );
}
