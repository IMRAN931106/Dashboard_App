import { Children, createContext, useContext, useState } from "react";
import { AuthContextType, SessionType } from "../types/global";

const getSession = () => {
  return JSON.parse(localStorage.getItem("session") || "null");
};

// storeSession session
const setSessionInLocalStorage = (session: SessionType) => {
  localStorage.setItem("session", JSON.stringify(session));
  return true;
};

// clear session
const clearSession = () => {
  localStorage.removeItem("session");
  return true;
};
export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = getSession() as SessionType;
  const [session, setSession] = useState<SessionType | null>(auth || null);
  const setAuth = (session: SessionType) => {
    setSession(session);
    setSessionInLocalStorage(session);
  };

  // login function
  const login = (session: SessionType) => {
    setAuth(session);
  };

  // logout function
  const logout = () => {
    // implement your logout logic here
    setSession(null);
    clearSession();
  };

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext) as AuthContextType;
};
