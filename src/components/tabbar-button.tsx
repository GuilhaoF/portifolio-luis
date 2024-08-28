import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};
interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

export function TabButton({ active, selectTab, children } : TabButtonProps) {
  const buttonClasses = active ? "text-green-500 border-b-2 border-green-500" : "text-black";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;