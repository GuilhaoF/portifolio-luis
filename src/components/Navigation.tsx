interface NavigationProps {
  direction: string;
  gap: string;
  color: string;
  borderColor: string;
}
export function NavigationComponent({
  direction,
  gap,
  color,
  borderColor,
}: NavigationProps) {
  return (
    <div
      className={` flex flex-${direction} items-center justify-evenly gap-${gap} font-medium text-${color} lg:text-lg lg:justify-center lg:gap-12`}
    >
      {/* Home */}
      <a href="#">
        <p className="">Inicio</p>
      </a>
      {/* Techs */}
      <a href="#techs">
        <p className="">Tecnologias</p>
      </a>
      {/* Opção Sobre */}
      <a href="#about">
        <p
          className={`border-b ${borderColor} transition hover:border-orange-300`}
        >
          Sobre
        </p>
      </a>
      {/* Opção Projetos */}
      <a href="#projects">
        <p
          className={`border-b ${borderColor} transition hover:border-orange-300`}
        >
          Projetos
        </p>
      </a>
      {/* Curriculo */}
      <a href="#projects">
        <p
          className={`border-b ${borderColor} transition hover:border-orange-300`}
        >
          Curriculo
        </p>
      </a>
      {/* Opção Contato */}
      <a href="#contact">
        <p
          className={`border-b ${borderColor} transition hover:border-orange-300`}
        >
          Contato
        </p>
      </a>
    </div>
  );
}
