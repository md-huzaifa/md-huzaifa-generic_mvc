import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="w-full flex justify-center items-center p-4 text-primary-light dark:text-primary-dark bg-background-light dark:bg-background-dark fixed bottom-0 ">
      <div className="text-xs text-center">
        <span className="font-bold">Classic Informatics Ltd</span>
        <div>Copyright &copy; {new Date().getFullYear()}</div>
      </div>
    </div>
  );
};
