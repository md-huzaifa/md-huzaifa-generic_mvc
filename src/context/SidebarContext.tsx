import React, { createContext, useContext, useState } from "react";

interface SideBarContextType {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarContext = createContext<SideBarContextType | undefined>(undefined);

export const useExpand = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error("useAuth must be used within an SideBarProvider");
  }
  return context;
};

export const SideBarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [expand, setExpand] = useState(true);

  return (
    <SideBarContext.Provider value={{ expand, setExpand }}>
      {children}
    </SideBarContext.Provider>
  );
};
