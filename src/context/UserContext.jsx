import { createContext, useEffect, useState } from "react";
import userdata from "../seeddata/userlist";

export const UserContext = createContext();

const getInitialUsers = () => {
  const storedUsers = JSON.parse(localStorage.getItem("bugtrackerusers"));
  return storedUsers && storedUsers.length > 0 ? storedUsers : userdata;
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(getInitialUsers);

  useEffect(() => {
    const hasAdmin = users.some((user) => user.role === "admin");
    if (!hasAdmin) {
      setUsers(userdata);
    }

    localStorage.setItem("bugtrackerusers", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([{ ...user, id: Date.now() }, ...users]);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (id) => {
    const target = users.find((user) => user.id === id);
    if (target.role === "admin") {
      alert("Admin users cannot be deleted");
      return;
    }
    setUsers((prev) => prev.filter((user) => id !== user.id));
  };
  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
