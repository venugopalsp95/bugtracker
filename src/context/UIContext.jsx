import { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeSidebar = () => setIsOpen(false);
  const openSidebar = () => setIsOpen(true);
  const toogleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <UIContext.Provider
      value={{ isOpen, setIsOpen, closeSidebar, openSidebar, toogleSidebar }}
    >
      {children}
    </UIContext.Provider>
  );
};
