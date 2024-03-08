import { useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";

import { SidebarBtn } from "@/components";
import { SideBarList } from "@/constants/sidebarlist";
import type { ISidebarItem } from "@/types/sidebar.types";
import { useExpand } from "@/context/SidebarContext";

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { expand, setExpand } = useExpand();

  const [sidebarItems, setSidebarItems] = useState<ISidebarItem[]>([]);

  useEffect(() => {
    setSidebarItems([...SideBarList]);
  }, []);

  return (
    <>
      <aside
        className={`transition-all duration-300 z-[100] bg-white dark:bg-background-dark top-[70px] lg:top-[90px] bottom-0 left-0 flex flex-col md:-translate-x-0 shadow justify-start items-start fixed
        ${showSidebar ? "-translate-x-0" : "-translate-x-full"} 
        ${expand ? "lg:w-[230px]" : "lg:w-[90px]"} md:w-[90px]`}
      >
        <div className="grid grid-rows-[auto] w-full h-max max-h-full overflow-y-auto custom-scrollbar">
          {sidebarItems.map((item, index) => (
            <SidebarBtn key={index} {...item} expand={expand} index={index} />
          ))}
        </div>
        <button
          className="hidden lg:block text-xl rounded-full p-3 shadow-lg hover:bg-blue-100 duration-300 transition-colors absolute -right-3 bg-white top-[90%]"
          onClick={() => setExpand((prev) => !prev)}
        >
          <BsChevronLeft
            className={`transition-all duration-300 ${
              expand ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>
      </aside>
      {/* show and hide the navigation sidebar (For mobile screens)*/}
      <div
        className={`fixed top-0 left-0 bottom-0 w-screen z-[90] md:hidden bg-black/10 
        ${!showSidebar && "hidden"}`}
        onClick={() => setShowSidebar(false)}
      ></div>
    </>
  );
};
