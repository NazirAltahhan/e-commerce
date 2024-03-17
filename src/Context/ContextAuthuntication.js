import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const login = (userName) => {
    localStorage.setItem("username", userName);
    setUser(userName);
    userName === "admin"
      ? (window.location.pathname = "/admin")
      : (window.location.pathname = "/user");
  };
  const SignUp = (userName) => {
    localStorage.setItem("username", userName);
    setUser(userName);
  };
  const logOut = () => {
    setUser(null);
    localStorage.removeItem("username");
    window.location.pathname = "/";
  };

  return (
    <AuthContext.Provider value={{ user, login, logOut, SignUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
