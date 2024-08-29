
interface ProjectTagProps {
  name: string;
  isSelected: boolean;
  onClick: (name: string) => void;
}

export function  ProjectTag({ name, isSelected, onClick }: ProjectTagProps){
  const buttonStyles = isSelected
  ? "text-black border-primary-500"
  : "text-black border-green-600";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 shadow-xl px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}