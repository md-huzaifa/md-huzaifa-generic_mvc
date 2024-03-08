import { Link } from "react-router-dom";
import { Profile } from "@/components/Profile";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };
  return (
    <nav className="z-[100] bg-background-light dark:bg-background-dark  shadow border-b-[1px] flex flex-row items-center gap-4 px-5 fixed top-0 left-0 right-0 h-[70px] lg:h-[90px]">
      <div className="min-w-max md:w-[74px] lg:w-[15vw] md:pl-4">
        <Link to="/dashboard" className="flex flex-col items-start gap-2">
          <h4 className=" lg:block font-bold text-primary-light dark:text-primary-dark  leading-[1]">
            Navbar logo
          </h4>
        </Link>
      </div>

      <div className="w-full flex flex-row justify-end items-center gap-10">
        <button
          className={`text-2xl   duration-300 ease-in-out ${
            isDarkMode ? "bg-secondary-light" : ""
          }`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <Profile />
      </div>
    </nav>
  );
};
