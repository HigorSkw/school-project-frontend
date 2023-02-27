import { ReactNode } from "react";

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IGlobalContext {
  user: IUser | undefined;
  loginUser: (dataUser: IUserLogin) => void;
  registerUser: (dataRes: IUserRegister) => void;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUser {
  name: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  type_account: string;
  confirm_password?: string;
}
