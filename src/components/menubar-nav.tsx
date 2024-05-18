import {
  ContactIcon,
  FolderKanbanIcon,
  GanttChart,
  InfoIcon,
  Menu,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import Hero from "../assets/Hero.jpg";

export function MenuBarNav() {
  return (
    <header className="sticky top-0 flex h-16 items-center  gap-4 border shadow-md px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium  bg-white  md:flex md:flex-row md:items-center md:justify-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
         <Image
              src={Hero}
              alt="avatar"
              className="object-cover w-11 rounded-full border-4 border-green-600"
            />
        </Link>
        <Link
          href="/about"
          className="text-foreground transition-colors hover:text-foreground hover:text-green-700"
        >
          Experiencias
        </Link>
        <Link
          href="/projects"
          className="text-muted-foreground transition-colors hover:text-foreground hover:text-green-700"
        >
          Projetos
        </Link>
        <Link
          href="/contact"
          className="text-muted-foreground transition-colors hover:text-foreground hover:text-green-700"
        >
          Contato e Localização
        </Link>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image
              src={Hero}
              alt="avatar"
              className="object-cover w-11 rounded-full border-2 border-green-600"
            />
              <p>Luis Felipe G</p>
            </Link>
            <Link
              href="/"
              className="flex gap-2 items-center hover:text-foreground"
            >
              <InfoIcon size={28} />
              Inicio
            </Link>
            <Link
              href="/about"
              className="flex gap-2 items-center text-muted-foreground hover:text-foreground"
            >
              <GanttChart size={28} />
              Experiencias
            </Link>
            <Link
              href="/projects"
              className="flex gap-2 items-center text-muted-foreground hover:text-foreground"
            >
              <FolderKanbanIcon size={28} />
              Projetos
            </Link>
            <Link
              href="/contact"
              className="flex gap-2 items-center text-muted-foreground hover:text-foreground"
            >
              <ContactIcon size={28} />
              Contato e Localizacao
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
