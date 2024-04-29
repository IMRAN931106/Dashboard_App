import { createContext, useContext, useState } from "react";
import { AppContextType } from "../types/global";

export const AppContext = createContext<AppContextType | null>(null);

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(AppContext) as AppContextType;
};
