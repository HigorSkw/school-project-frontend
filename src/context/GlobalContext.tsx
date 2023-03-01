import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { api } from "../services";

import {
  IAuthProviderProps,
  IClub,
  IEditUser,
  IGlobalContext,
  IGrade,
  ISubject,
  ISubjectCreate,
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
  const [user, setUser] = useState<IUser>();
  const [userEdit, setUserEdit] = useState<IUser>();
  const [accountEmail, setAccountEmail] = useState<any>();
  const [users, setUsers] = useState<any>();
  const [teachers, setTeachers] = useState<IUser[]>();
  const [students, setStudents] = useState<IUser[]>();
  const [clubs, setClubs] = useState<IClub[]>();
  const [subjects, setSujects] = useState<ISubject[]>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [editUserModal, setEditUserModal] = useState<boolean>(false);
  const [deleteUserModal, setDeleteUserModal] = useState<boolean>(false);
  const [editSubjectModal, setEditSubjectModal] = useState<boolean>(false);
  const [deleteSubjectModal, setDeleteSubjectModal] = useState<boolean>(false);
  const [subject, setSuject] = useState<ISubject>();

  const [editClubModal, setEditClubModal] = useState<boolean>(false);
  const [deleteClubModal, setDeleteClubModal] = useState<boolean>(false);
  const [club, setClub] = useState<IClub>();
  const [grades, setGrades] = useState<IGrade[]>();
  const [grade, setGrade] = useState<IGrade>();

  const [deleteGradeModal, setDeleteGradeModal] = useState<boolean>(false);
  const [editGradeModal, setEditGradeModal] = useState<boolean>(false);

  const token = localStorage.getItem("@school-token");

  useEffect(() => {
    const token = localStorage.getItem("@school-token");

    if (token === null) {
      navigate("*", { replace: true });
    }

    if (token) {
      getUsers();
      getClubs();
      getSubjects();
      getGrades();
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

  const registerUserComponent = (dataRes: IUserRegister) => {
    api
      .post("/users/", dataRes)
      .then((res) => {
        toast.success("Conta Criada com sucesso!");
        getUsers();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const getUsers = async () => {
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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
    const account = users.find((elem) => elem.email === email);

    setUser(account);
  };

  const loginUser = (dataUser: IUserLogin) => {
    api
      .post("/users/login/", dataUser)
      .then((res) => {
        const { access: token } = res.data;
        window.localStorage.clear();
        window.localStorage.setItem("@school-token", token);
        toast.success("Login Feito com sucesso!");
        setAccountEmail(dataUser.email);
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
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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

  const createSubjects = async (data: ISubjectCreate) => {
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await api
      .post(`/subjects/teacher/${data.teacher}/`, data)
      .then((res) => {
        toast.success("Matéria Criada com sucesso!");
        getSubjects();
        getUsers();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const editSubject = (data: ISubjectCreate) => {
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api
      .patch(`/subjects/${subject?.id}/`, data)
      .then((res) => {
        toast.success("Matéria Atualizada com sucesso!");
        setEditSubjectModal(false);
        getSubjects();
        getUsers();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const deleteSubject = () => {
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api
      .delete(`/subjects/${subject?.id}/`)
      .then((res) => {
        toast.success("Matéria Deletada com sucesso!");
        setDeleteSubjectModal(false);
        getSubjects();
        getUsers();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const editUser = (data: IEditUser) => {
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    api
      .patch(`users/${userEdit?.id}/`, data)
      .then((res) => {
        toast.success("Usuário atualizado!");
        setUser(res.data);
        getUsers();
        setEditUserModal(!editUserModal);
      })
      .catch((err) => {
        toast.error("Algo deu errado...");
      });
  };

  const deleteUser = () => {
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    api
      .delete(`users/${userEdit?.id}/`)
      .then((res) => {
        toast.success("Usuário atualizado!");
        getUsers();
        setDeleteUserModal(!deleteUserModal);
      })
      .catch((err) => {
        toast.error("Algo deu errado...");
      });
  };

  const createClub = async (data: IClub) => {
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await api
      .post(`/clubs/`, data)
      .then((res) => {
        toast.success("Classe Criada com sucesso!");
        getSubjects();
        getClubs();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const editClub = async (data: IClub) => {
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await api
      .patch(`/clubs/${club?.id}/`, data)
      .then((res) => {
        toast.success("Classe Atualizada com sucesso!");
        getSubjects();
        getClubs();
        setEditClubModal(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const deleteClub = async () => {
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await api
      .delete(`/clubs/${club?.id}/`)
      .then((res) => {
        toast.success("Classe Deletada com sucesso!");
        getSubjects();
        getClubs();
        setDeleteClubModal(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const createGrade = async (data: IGrade) => {
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await api
      .post(`/grades/`, data)
      .then((res) => {
        toast.success("Avaliação Criada com sucesso!");
        getSubjects();
        getClubs();
        getGrades();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const getGrades = () => {
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api
      .get(`/grades/`)
      .then((res) => {
        setGrades(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const editGrade = async (data: IGrade) => {
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await api
      .patch(`/grades/${grade?.id}/`, data)
      .then((res) => {
        toast.success("Avaliação Atualizada com sucesso!");
        getSubjects();
        getClubs();
        getGrades();
        setEditGradeModal(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado!");
      });
  };

  const deleteGrade = async () => {
    const token = localStorage.getItem("@school-token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await api
      .delete(`/grades/${grade?.id}`)
      .then((res) => {
        toast.success("Avaliação Deletada com sucesso!");
        getSubjects();
        getClubs();
        getGrades();
        setDeleteGradeModal(false);
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
        activeIndex,
        setActiveIndex,
        editUserModal,
        setEditUserModal,
        editUser,
        userEdit,
        setUserEdit,
        deleteUserModal,
        deleteUser,
        setDeleteUserModal,
        registerUserComponent,
        createSubjects,
        deleteSubjectModal,
        editSubjectModal,
        setDeleteSubjectModal,
        setEditSubjectModal,
        setSuject,
        subject,
        editSubject,
        deleteSubject,
        createClub,
        editClubModal,
        setEditClubModal,
        setClub,
        editClub,
        club,
        deleteClubModal,
        setDeleteClubModal,
        deleteClub,
        createGrade,
        grades,
        deleteGrade,
        editGrade,
        grade,
        setGrade,
        deleteGradeModal,
        editGradeModal,
        setDeleteGradeModal,
        setEditGradeModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
