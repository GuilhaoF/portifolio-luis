import CarrouselSkills from "@/components/carrousel-skills";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { ProfilePic } from "../components/profile-pic";
import { Social } from "../components/social-links";


export default function Home() {
  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24" >
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desenvolvedor Front-end e Mobile</span>
            <h1 className="h1 mb-6">
              Olá, me chamo <br />
            </h1>
            <span className=" text-[1.5rem] text-green-500">Luis Felipe Guilhao</span>
            <div className="flex flex-col xl:flex-row items-center gap-8">

              <Button variant="outline" size="lg" className=" bg-primary rounded-lg shadow-xl uppercase flex items-center gap-2">
                <span>Baixar Currículo</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-green-500 rounded-full flex justify-center items-center text-white text-base hover: transition-all
                  duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <ProfilePic />
          </div>
        </div>
      </div>
      <CarrouselSkills />
    </div>
  );
}
