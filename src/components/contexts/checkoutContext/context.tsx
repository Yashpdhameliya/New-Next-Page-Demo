import { FC, ReactNode, createContext, useState } from "react";

type GlobalContextType = {
  setPopularData: (popularData: any) => void;
  popularData: any;
  getpopularData: () => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  setPopularData: () => {},
  popularData: undefined,
  getpopularData: () => {},
});

const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [popularData, setPopularData] = useState(null);
  const getpopularData = async () => {};

  const globalContextValue = {
    popularData,
    setPopularData,
    getpopularData,
  };

  return (
    <GlobalContext.Provider value={globalContextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
