import { useExpand } from "@/context/SidebarContext";

interface PageBodyProps {
  children: React.ReactNode;
}

export const PageBody: React.FC<PageBodyProps> = ({ children }) => {
  const { expand } = useExpand();
  return (
    <main
      id="page-body"
      className={`max-w-[100vw]  custom-scrollbar-large flex-grow p-5 flex flex-col mt-[70px] lg:mt-[90px] md:ml-[90px] bg-gray-100
      ${expand ? "lg:ml-[230px]" : "lg:ml-[90px]"}
      `}
    >
      {children}
    </main>
  );
};
