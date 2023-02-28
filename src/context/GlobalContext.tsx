import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { api } from "../services";

import {
  IAuthProviderProps,
  IClub,
  IGlobalContext,
  ISubject,
  IUser,
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
  const [accountEmail, setAccountEmail] = useState<any>();
  const [users, setUsers] = useState<any>();
  const [teachers, setTeachers] = useState<IUser[]>();
  const [students, setStudents] = useState<IUser[]>();
  const [clubs, setClubs] = useState<IClub[]>();
  const [subjects, setSujects] = useState<ISubject[]>();

  const token = window.localStorage.getItem("@school-token");

  useEffect(() => {
    const token = window.localStorage.getItem("@school-token");

    if (token === null) {
      navigate("*", { replace: true });
    }
  }, [token]);

  const navigate = useNavigate();

  const registerUser = (dataRes: IUserRegister) => {
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

  const getUsers = async () => {
    await api
      .get("/users/")
      .then((res) => {
        setUsers(res.data.results);
        filterUsers(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const filterUsers = (data: IUser[]) => {
    let teachers: IUser[] = [];
    let students: IUser[] = [];
    data.forEach((elem) => {
      if (elem.type_account === "teacher") {
        teachers?.push(elem);
      } else if (elem.type_account === "student") {
        students.push(elem);
      }
    });
    setTeachers(teachers);
    setStudents(students);
  };

  const getAccount = (email: string, users: IUser[]) => {
    const account = users.filter((elem) => elem.email === email);

    setUser(account);
  };

  const loginUser = (dataUser: IUserLogin) => {
    api
      .post("/users/login/", dataUser)
      .then((res) => {
        const { access: token } = res.data;
        window.localStorage.clear();
        window.localStorage.setItem("@school-token", token);

        api.defaults.headers.common.authorization = `Bearer ${token}`;
        toast.success("Login Feito com sucesso!");
        getUsers();
        setAccountEmail(dataUser.email);
        getClubs();
        getSubjects();
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const logoutUser = () => {
    setUser(undefined);
    window.localStorage.clear();
    toast.success("Logout efetuado!!");
    navigate("/login");
  };

  const getClubs = async () => {
    await api
      .get("/clubs/")
      .then((res) => {
        setClubs(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const getSubjects = async () => {
    await api
      .get("/subjects/")
      .then((res) => {
        setSujects(res.data.results);
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
        logoutUser,
        teachers,
        students,
        filterUsers,
        getAccount,
        getUsers,
        clubs,
        subjects,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
