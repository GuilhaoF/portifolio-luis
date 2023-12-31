import React from "react";
import Image from "next/image";
import ProfileImage from '../assets/Hero.jpg';
import { ContactLinks } from "./ContactLinks";
import { DiscordLogo, DownloadSimple, GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";


export function ProfileHeroComponent() {

  function handleDownloadCvPdf() {
    const url = 'https://drive.google.com/file/d/1_6fvaZej9VlsLGra-I5ook8xSXiLqwS7/view?usp=drive_link'
    const path = document.createElement('a')
    path.href = url;
    path.download = 'luis.pdf';
    path.target = 'blank'
    path.click();
  }

  return (
    <>
      <div className="bg-slate-200">

        <div className="flex flex-col gap-8 min-h-[calc(100vh-80px)] items-center justify-center py-16 px-12 my-0 mx-auto text-center lg:flex-row lg:text-left md:max-w-6xl lg:gap-40">


          {/* Card Info */}
          <div className="flex flex-col gap-3 order-2 lg:order-1 md:max-w-lg md:gap-16">
            <div className="flex flex-col gap-4">

              <h1 className="font-alt text-ocean-blue-700 text-3xl md:text-5xl lg:text-6xl">
                Desenvolvedor Front-End e Mobile
              </h1>

              <p className="text-ocean-blue-700 text-sm md:text-base">
                Olá, sou <strong>Luis Felipe G Silva</strong>, um desenvolvedor front-end com uma paixão ardente pelo mundo da web e da tecnologia.
              </p>
              <p className="text-ocean-blue-700 text-sm md:text-base">
                Meu objetivo principal é criar experiências digitais que cativem os usuários e proporcionem uma jornada suave e agradável. Como um desenvolvedor front-end e mobile,
                minha especialidade está em traduzir designs e conceitos em código, combinando todas as tecnologias listadas nesse portifolio para dar vida a websites e aplicativos.
              </p>
              <button onClick={handleDownloadCvPdf} className="flex items-center justify-center border-[1px] border-[#113657] px-8 py-2 rounded-lg gap-2 font-bold transition text-[#000] text-lg bg-ocean-blue-700 hover:bg-ocean-blue-300">
                <DownloadSimple size={44} className="text-green-700" />
                Download Currículo
              </button>
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

              <ContactLinks pathName="https://api.whatsapp.com/send?phone=5599992169563">
                <WhatsappLogo size={56} className='cursor-pointer text-ocean-blue-700 transition-all duration-200 hover:text-navy-blue-300' />
              </ContactLinks>

            </div>


          </div>


        </div>


      </div>
    </>
  );
}
