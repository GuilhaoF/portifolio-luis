
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAtlas, FaHome, FaInfo, FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const linksMenu = [
  {
    name: 'Home',
    path: '/',
    icon: <FaHome/>
  },
  {
    name: 'Sobre Mim',
    path: '/about',
    icon: <FaUser/>
    
  },
  {
    name: 'Projetos',
    path: '/projects',
    icon: <FaAtlas/>
  },
  {
    name: 'Contato',
    path: '/contact',
    icon: <FaInfo/>
  }
]

export function MobileNav() {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <FiMenu className="text-3xl text-green-500" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-green-500">
              Luis Felipe G Silva<span className="text-green-500">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {
            linksMenu.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className={`${link.path === pathname && "text-green-500 border-b-2 border-green-500"} flex items-center justify-center gap-4 first-letter:text-xl capitalize hover:text-gray-500 transition-all`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              )
            })
          }
        </nav>
      </SheetContent>
    </Sheet>
  )
}