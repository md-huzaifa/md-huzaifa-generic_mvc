import { Link, useLocation } from "react-router-dom";

interface SidebarBtnProps {
  index: number;
  name: string;
  path: string;
  icon: React.ReactNode | null;
  expand: boolean;
}

export const SidebarBtn: React.FC<SidebarBtnProps> = ({
  name,
  path,
  icon,
  expand,
  index,
}) => {
  const location = useLocation();

  const checkActive = (path: string): boolean => {
    let active = false;
    const splitPath = path.split("/");
    const lastPath = splitPath[splitPath.length - 1];
    const activeSplitPath = location.pathname.split("/");

    if (activeSplitPath[1] === lastPath) {
      active = true;
    }
    return active;
  };

  return (
    <Link key={index} to={path} className="w-full block relative h-max">
      <div
        className={`w-full p-4 flex flex-row items-center gap-4 justify-start overflow-hidden transition-all duration-300 hover:bg-secondary-dark md:justify-center pl-8 md:pl-4
      ${expand ? "lg:pl-8 lg:justify-start" : "lg:justify-center"}
      ${
        checkActive(path)
          ? "bg-background-light dark:bg-background-light"
          : "dark:text-white"
      }`}
      >
        <span className="text-lg inline-block ">{icon}</span>
        <div
          className={`w-full flex md:hidden text-base flex-row ${
            expand ? "lg:flex" : ""
          }`}
        >
          {name}
        </div>
      </div>
    </Link>
  );
};
