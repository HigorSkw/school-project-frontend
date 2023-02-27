import loginImg from "../../assets/login.svg";
import { ContainerLogin } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { IUserLogin } from "../../context/GlobalInterface";

const Login = () => {
  const { loginUser } = useContext(GlobalContext);

  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Inserir um email válido")
      .required("Email obrigatório!"),
    password: yup.string().required("Password é obrigatório!"),
  });

  window.localStorage.clear();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(loginSchema) });

  return (
    <ContainerLogin>
      <div className="box">
        <div className="container_form">
          <form onSubmit={handleSubmit(loginUser)}>
            <h2>Bem vindo!!</h2>
            <label htmlFor="email">E-mail:</label>
            <input
              placeholder="Digite seu E-mail"
              id="email"
              {...register("email")}
            />
            <span>{errors.email && errors.email.message}</span>

            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              id="password"
              {...register("password")}
            />
            <span>{errors.password && errors.password.message}</span>

            <button type="submit">Login</button>
          </form>
          <div className="register">
            <span>Já possui uma conta? </span>
            <Link to={"/register"}>Registrar!</Link>
          </div>
        </div>
        <div className="container_image">
          <img src={loginImg} alt="Login" />
        </div>
      </div>
    </ContainerLogin>
  );
};

export default Login;
