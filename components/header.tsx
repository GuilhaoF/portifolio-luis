import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { MobileNav } from "./mobile-nav";
import Nav from "./navbar";
import { Button } from "./ui/button";


export function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/'>
          <h1 className="text-4xl font-semibold flex gap-1">
           Luis Felipe <span className="text-green-700">
           <FaReact size={28} className=" animate-spin" />
           </span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
            <Link href='https://www.linkedin.com/in/luis-felipe-silv/'>
                <Button className=" bg-green-700 hover:bg-green-500">Linkedin</Button>
            </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}