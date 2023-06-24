import Image from "next/image";
import ProfileImage from '../assets/Hero.jpg';
import Link from "next/link";
import { ContactLinks } from "./ContactLinks";
import { DiscordLogo, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function ProfileHeroComponent() {
  return (
    <div className="bg-neutral-50">
      <div className="flex flex-col gap-8 min-h-[calc(100vh-80px)] items-center justify-center py-16 px-12 my-0 mx-auto text-center lg:flex-row lg:text-left md:max-w-6xl lg:gap-40">


        {/* Card Info */}
        <div className="flex flex-col gap-3 order-2 lg:order-1 md:max-w-lg md:gap-16">
          <div className="flex flex-col gap-4">
            <h1 className="font-alt text-ocean-blue-700 text-3xl md:text-5xl lg:text-6xl">
              Desenvolvedor Front-End e Mobile
            </h1>

            <p className=" text-ocean-blue-700 text-sm md:text-base">
              Olá! me chamo Luís Felipe e sou desenvolvedor front-end e mobile, a baixo você irá ver minhas tecnologias e projetos que desenvolvi.
            </p>
          </div>
        </div>

        {/* Card Contact Links e Image */}
        <div className='flex flex-col items-center justify-center gap-4 order-1 lg:order-2' >
          <Image className="rounded-full  border-4 border-[#113657]" src={ProfileImage} alt='Profile' height={350} quality={80} priority />

          <div className='flex gap-4 items-center'>

            <ContactLinks pathName="https://www.linkedin.com/in/luis-felipe-silv/">
              <LinkedinLogo size={56} className='cursor-pointer text-ocean-blue-700 transition-all duration-200 hover:text-navy-blue-300' />
            </ContactLinks>

            <ContactLinks pathName="https://github.com/GuilhaoF">
              <GithubLogo size={56} className='cursor-pointer text-ocean-blue-700 transition-all duration-200 hover:text-navy-blue-300' />
            </ContactLinks>

            <ContactLinks pathName="/">
              <DiscordLogo size={56} className='cursor-pointer text-ocean-blue-700 transition-all duration-200 hover:text-navy-blue-300' />
            </ContactLinks>

          </div>


        </div>


      </div>


    </div>
  );
}
