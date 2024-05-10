import Layout from "@/components/layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Hero from "../assets/Hero.jpg";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mx-auto min-h-screen space-y-32">
        <Image
          src={Hero}
          width={200}
          height={200}
          className="rounded-full"
          alt="Luis"
        />
        <Accordion
          type="single"
          collapsible
          className=" w-3/4 border-2 border-green-700"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>O que eu gosto?</AccordionTrigger>
            <AccordionContent className="flex justify-center text-center max-w-24 overflow-auto font-bold">
              <p>
              Meu objetivo principal é criar experiências digitais que cativem
              os usuários e proporcionem uma jornada suave e agradável. Como um
              desenvolvedor front-end e mobile, minha especialidade está em
              traduzir designs e conceitos em código, combinando todas as
              tecnologias listadas nesse portifolio para dar vida a websites e
              aplicativos.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Minhas Stacks?</AccordionTrigger>
            <AccordionContent className=" text-base font-bold">
              <ul className="flex-col">
                <li>React</li>
                <li>Next.js</li>
                <li>Typescript</li>
                <li>React Native</li>
                <li>TailwindCss</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Melhor Projeto?</AccordionTrigger>
            <AccordionContent className="mx-2  text-base font-bold">Nextjs Ifood Clone</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
}
