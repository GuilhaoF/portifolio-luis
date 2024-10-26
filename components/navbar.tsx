"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Serviços",
    path: "/services",
  },
  {
    name: "Resumo",
    path: "/resume",
  },
  {
    name: "Projetos",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-white border-b-2 border-green-500"
            } captalize font-medium hover:text-gray-500 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
