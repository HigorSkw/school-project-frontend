import { ReactNode } from "react";

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IGlobalContext {
  user: Object | undefined;
}
