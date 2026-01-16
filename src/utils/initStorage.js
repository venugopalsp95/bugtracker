import buglist from "../seeddata/buglist";
import userlist from "../seeddata/userlist";

export const initStorege = () => {
  const initialized = localStorage.getItem("initialized");
  if (!initialized) {
    localStorage.setItem("users", JSON.stringify(userlist));
    localStorage.setItem("bugs", JSON.stringify(buglist));
    localStorage.setItem("initialized", "true");
  }
};
