import Link from "next/link";
import Nav from "./navbar";
import { Button } from "./ui/button";


export function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/'>
          <h1 className="text-4xl font-semibold">
           Luis Felipe <span className="text-green-700">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
            <Link href='https://www.linkedin.com/in/luis-felipe-silv/'>
                <Button>Linkedin</Button>
            </Link>
        </div>

        <div className="xl:hidden">
          
        </div>
      </div>
    </header>
  )
}