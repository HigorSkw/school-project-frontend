import { createContext, useState } from "react";

import { IAuthProviderProps, IGlobalContext } from "./GlobalInterface";

export const GlobalContext = createContext<IGlobalContext>(
  {} as IGlobalContext
);

export const GlobalProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<any>();

  return (
    <GlobalContext.Provider value={user}>{children}</GlobalContext.Provider>
  );
};
