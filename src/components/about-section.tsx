'use client';
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./tabbar-button";
import {
  GithubIcon,
  HeadsetIcon,
  LinkedinIcon,
  MailIcon,
  TrophyIcon,
} from "lucide-react";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="text-gray-400 pl-2">
        <li>ReactJs</li>
        <li>NextJs</li>
        <li>React Native</li>
        <li>Expo</li>
        <li>Tailwind Css</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Styled-Components</li>
      </ul>
    ),
  },
  {
    title: "Educaçao",
    id: "education",
    content: (
      <ul className="text-gray-400 pl-2">
        <li>Analise e Desenvolvimento de Sistemas - Unip </li>
        <li>Ensino Tecnico em Informatica - IFMA</li>
        <li>Bootcamp Spread Fullstack - Js/Ts</li>
      </ul>
    ),
  },
  {
    title: "Certificaçoes",
    id: "certifications",
    content: (
      <div className="text-gray-400 pl-2 space-y-2">
        <li className="flex items-center gap-2">
          <TrophyIcon />
          Especialista React Native - Rocketseat
        </li>
        <li className="flex items-center gap-2">
          <TrophyIcon />
          Especialista React/NextJs - Rocketseat
        </li>
        <li className="flex items-center gap-2">
          <TrophyIcon />
          React Native - Udemy
        </li>
        <li className="flex items-center gap-2">
          <TrophyIcon />
          Desenvolvimento Mobile - Sujeito Programador
        </li>
      </div>
    ),
  },
  {
    title: "Redes",
    id: "redes",
    content: (
      <div className="text-gray-400 pl-2 space-y-2" id="contact">
        <Link
          className="flex items-center gap-2"
          href="https://www.linkedin.com/in/luis-felipe-silv/"
          target="_blank"
        >
          <LinkedinIcon />
          Linkedin
        </Link>

        <Link className="flex items-center gap-2" href="/">
          <HeadsetIcon />
          Discord
        </Link>

        <Link className="flex items-center gap-2" href="/">
          <MailIcon />
          Gmail
        </Link>
        <Link
          className="flex items-center gap-2"
          href="https://github.com/GuilhaoF"
          target="_blank"
        >
          <GithubIcon />
          Github
        </Link>
      </div>
    ),
  },
];

export function AboutSection() {
  const [tabSelected, setTabSelected] = useState("skills");
  const [isPending, startTransition] = useTransition(); // serve para fazer animações de transição de elementos

  function handleTabChange(id: any) {
    startTransition(() => {
      setTabSelected(id);
    });
  }

  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.jpg"
          alt="Luis Felipe"
          width={600}
          height={600}
          className=""
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">Sobre Mim</h2>
          <div className="blur-background text-gray-500 p-14">
            Meu nome é Luis Felipe, tenho 25 anos e sou desenvolvedor de
            software. Atualmente trabalho como desenvolvedor freelancer , com
            projetos para a comunidade. Tenho trabalhado com tecnologias como
            ReactJs, NextJs e React Native. Sou apaixonado por tecnologia e
            sempre busco aprender coisas novas.
          </div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tabSelected === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tabSelected === "education"}
            >
              {" "}
              Educaçao{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tabSelected === "certifications"}
            >
              {" "}
              Certificaçoes{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("redes")}
              active={tabSelected === "redes"}
            >
              {" "}
              Redes de Contato{" "}
            </TabButton>
          </div>
          <div className="mt-2">
            {TAB_DATA.find((t) => t.id === tabSelected)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
