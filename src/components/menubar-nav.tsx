import {
  CodeIcon,
  ContactIcon,
  HomeIcon,
  InfoIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Hero from "../assets/Hero.jpg";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Switch } from "./ui/switch";

export function MenuBarNav() {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // se a tela for maior que 768px ele abre o menu
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    // serve para remover o eventListener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isOpen ? (
    <>
      <aside
        className={`flex flex-col w-80  min-h-screen px-6 py-8  overflow-y-auto  bg-green-600 border-r `}
      >
        {/* parte de cima com icone */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold text-white">
            <span>Menu</span>
          </div>

          <div className="">
            <Button
              onClick={handleMenuClick}
              className="p-2 -mr-2 text-white transform rounded-md hover:animate-shake"
            >
              <XIcon size={24} />
            </Button>
          </div>
        </div>
        {/* parte de baixo com os links */}
        <div className="flex flex-col justify-between flex-1 mt-6 px-1">
          <nav>
            <div className="flex items-center py-2 mt-5 text-white rounded-md hover:animate-shake">
              <HomeIcon size={24} className="flex-shrink-0" />
              <Link href="/" className="mx-2 font-medium">
                Inicio
              </Link>
            </div>

            <div className="flex items-center py-2 mt-5 text-white  transform rounded-md hover:animate-shake">
              <InfoIcon size={24} className="flex-shrink-0" />
              <Link href="/about" className="mx-2 font-medium">
                Sobre Detalhado
              </Link>
            </div>

            <div className="flex items-center py-2 mt-5 text-white  transform rounded-md hover:animate-shake">
              <CodeIcon size={24} className="flex-shrink-0" />
              <span className="mx-2 font-medium">Projetos</span>
            </div>

            <div className="flex items-center py-2 mt-5 text-white  transform rounded-md hover:animate-shake">
              <ContactIcon size={24} className="flex-shrink-0" />
              <Link href="/contact" className="mx-2 font-medium">Contato</Link>
            </div>
          </nav>

          <div className="flex items-center">
            <Image
              src={Hero}
              alt="avatar"
              width={40}
              height={40}
              className="object-cover w-10 h-10 mx-2 rounded-full"
            />
            <span className="flex-1 mx-2 font-medium text-gray-800 dark:text-gray-200">
              Luis Felipe
            </span>
            {/* <div className="flex items-center lg:hidden">
              <div className="flex items-center h-6">
                <Switch checked className="bg-white mr-2 w-6" />
                <label>Mode</label>
              </div>
            </div> */}
          </div>
        </div>
      </aside>
    </>
  ) : (
    <div className="items-start p-6  border-r-4 border-green-600">
      <MenuIcon
        size={34}
        className="text-green-500"
        onClick={handleMenuClick}
      />
    </div>
  );
}
