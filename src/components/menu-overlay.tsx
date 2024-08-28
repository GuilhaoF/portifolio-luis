import React from "react";
import NavLink from "./navlink";


interface MenuOverlayProps {
  links: {
    title: string;
    path: string;
  }[];
}

export function MenuOverlay ({ links } :MenuOverlayProps ){
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

