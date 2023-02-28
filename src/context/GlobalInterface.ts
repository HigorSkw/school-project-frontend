import { ReactNode } from "react";

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IGlobalContext {
  user: IUser | undefined;
  userEdit: IUser | undefined;
  loginUser: (dataUser: IUserLogin) => void;
  registerUser: (dataRes: IUserRegister) => void;
  registerUserComponent: (dataRes: IUserRegister) => void;
  logoutUser: () => void;
  teachers: IUser[] | undefined;
  students: IUser[] | undefined;
  getUsers: () => Promise<void>;
  filterUsers: (data: IUser[]) => void;
  getAccount: (email: string, users: IUser[]) => void;
  clubs: IClub[] | undefined;
  subjects: ISubject[] | undefined;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  editUserModal: boolean;
  setEditUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  editUser: (data: IEditUser) => void;
  setUserEdit: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  deleteUser: () => void;
  deleteUserModal: boolean;
  setDeleteUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  createSubjects: (data: ISubjectCreate) => Promise<void>;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  type_account: string;
  club: IClub;
}

export interface IEditUser {
  id?: string;
  name?: string;
  email?: string;
  type_account?: string;
  club?: IClub;
  password?: string;
  confirm_password?: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  type_account: string;
  confirm_password?: string;
}

export interface IGrade {
  id: string;
  note: string;
  student: IUser;
  subject: ISubject;
}

export interface IClub {
  id: string;
  name: string;
  year: string;
  shift: string;
  subjects: string[];
}

export interface ISubject {
  id?: string;
  name: string;
  teacher?: IUser;
}

export interface ISubjectCreate {
  id?: string;
  name: string;
  teacher: IUser;
}
