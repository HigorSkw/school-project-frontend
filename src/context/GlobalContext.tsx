import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { api } from "../services";

import {
  IAuthProviderProps,
  IGlobalContext,
  IUserLogin,
  IUserRegister,
} from "./GlobalInterface";

export interface ILoginRes {
  data: {
    refresh: string;
    access: string;
  };
}
export const GlobalContext = createContext<IGlobalContext>(
  {} as IGlobalContext
);

export const GlobalProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<any>();

  const navigate = useNavigate();

  const registerUser = (dataRes: IUserRegister) => {
    console.log(dataRes);
    api
      .post("/users/", dataRes)
      .then((res) => {
        toast.success("Conta Criada com sucesso!");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const loginUser = (dataUser: IUserLogin) => {
    console.log(dataUser);
    api
      .post("/users/login/", dataUser)
      .then((res) => {
        const { access: token } = res.data;
        window.localStorage.clear();
        window.localStorage.setItem("@school-token", token);

        api.defaults.headers.common.authorization = `Bearer ${token}`;
        // fazer o filtro do usuário pelo email recebido
        toast.success("Login Feito com sucesso!");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        loginUser,
        user,
        registerUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
