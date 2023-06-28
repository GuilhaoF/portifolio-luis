import Image from "next/image";

//icones Techs
import iconeHtml from "../assets/html-icon.svg";
import iconeCss from "../assets/css-icon.svg";
import iconeJavascript from "../assets/javascript-icon.svg";
import iconeReactJs from "../assets/react-icon.svg";
import iconeTypescript from "../assets/typescript-icon.svg";
import iconeStyled from "../assets/styled-c-icon.svg";
import iconeNextJs from "../assets/next-icon-black.svg";
import iconeTailwind from "../assets/tailwind-icon.svg";
import iconeBoostrap from "../assets/icon-boostrap.svg"
import iconeMaterialUi from '../assets/icon-material-ui.svg'
import iconeChakraUi from '../assets/chakraui-icon.svg'
import iconeGit from '../assets/git-icon.svg'

export function CardTechsComponent() {
  const icons = [
    { src: iconeHtml, alt: "HTML", text: "HTML" },
    { src: iconeCss, alt: "CSS3", text: "CSS3" },
    { src: iconeJavascript, alt: "JavaScript", text: "JavaScript" },
    { src: iconeGit, alt: "Git", text: "Git/Github" },
    { src: iconeReactJs, alt: "React", text: "React" },
    { src: iconeTypescript, alt: "TypeScript", text: "TypeScript" },
    { src: iconeNextJs, alt: "Next.js", text: "Next.js" },
    { src: iconeStyled, alt: "styled-components", text: "styled-components" },
    { src: iconeTailwind, alt: "Tailwind CSS", text: "Tailwind CSS" },
    { src: iconeBoostrap, alt: "Bootstrap", text: "Bootstrap" },
    { src: iconeMaterialUi, alt: "MaterialUi", text: "MaterialUi" },
    { src: iconeChakraUi, alt: "ChakraUi", text: "ChakraUi" }
  ];

  return (
    <div className=" flex items-center justify-center gap-10 lg:flex-row lg:justify-between mt-4">
      {/* <h3 className="text-center border-b border-orange-300 font-semibold text-base text-gray-100 py-2 lg:border-r lg:border-b-0 lg:px-4">
        Tecnologias
      </h3> */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {icons.map((icon, index) => (
          <>
            <div
              key={index}
              className="p-4 bg-gray-200 rounded-lg flex flex-col items-center shadow-gray-100"
            >
              <div className="mb-4">
                <Image src={icon.src} alt={icon.alt} quality={80} />
              </div>
              <p className="text-center">{icon.text}</p>
            </div>
          </>
        ))}

      </div>
    </div>
  );
}
