import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { users } = useContext(UserContext);

  useEffect(() => {
    const stored = localStorage.getItem("authUser");
    if (!stored) return;
    const parsed = JSON.parse(stored);
    const validUser = users.find((user) => user.id === parsed.id);

    if (validUser) {
      setUser(validUser);
    } else {
      logout();
    }
  }, [users]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
