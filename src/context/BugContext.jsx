import { createContext, useEffect, useState } from "react";
import bugdata from "../seeddata/buglist";

export const BugContext = createContext();

const getInitialBugs = () => {
  const storedBugs = JSON.parse(localStorage.getItem("bugtrackerbugs"));
  return storedBugs && storedBugs.length > 0 ? storedBugs : bugdata;
};

export const BugProvider = ({ children }) => {
  const [bugs, setBugs] = useState(getInitialBugs);

  useEffect(() => {
    localStorage.setItem("bugtrackerbugs", JSON.stringify(bugs));
  }, [bugs]);

  const addBugs = (bug) => {
    setBugs([{ ...bug, id: Date.now() }, ...bugs]);
  };

  const updateBugs = (updatedBug) => {
    setBugs(bugs.map((bug) => (bug.id === updatedBug.id ? updatedBug : bug)));
  };
  const deleteBugs = (id) => setBugs(bugs.filter((bug) => id !== bug.id));

  return (
    <BugContext.Provider value={{ bugs, addBugs, updateBugs, deleteBugs }}>
      {children}
    </BugContext.Provider>
  );
};
