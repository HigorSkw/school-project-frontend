import complete from "../../assets/complete.svg";

import { ContainerRegister } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { IUserRegister } from "../../context/GlobalInterface";

const Register = () => {
  const { registerUser } = useContext(GlobalContext);

  const registerSchema = yup.object().shape({
    name: yup.string().required("Name é obrigatório"),
    email: yup.string().email("Não é um e-mail").required("E-mail obrigatório"),
    type_account: yup.string().required(),
    password: yup
      .string()
      .required("Deve conter uma senha")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Ex: Aa@12345678."
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Confirmação deve ser iguar a senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: yupResolver(registerSchema) });

  return (
    <ContainerRegister>
      <div className="box">
        <div className="container_form">
          <form onSubmit={handleSubmit(registerUser)}>
            <h2>Register </h2>
            <p>Tipo de Conta:</p>
            <select id="type_account" {...register("type_account")}>
              <option value="admin">Admin - Direção</option>
              <option value="student">Estudante</option>
              <option value="teacher">Professor(a)</option>
            </select>

            <label htmlFor="name">Name:</label>
            <input
              placeholder="Digite seu E-mail"
              id="name"
              {...register("name")}
            />
            <span>{errors.name && errors.name.message}</span>

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

            <label htmlFor="confirm_password">Confirmar Senha:</label>
            <input
              type="password"
              id="confirm_password"
              placeholder="********"
              {...register("confirm_password")}
            />
            {errors.confirm_password && (
              <span>{errors.confirm_password.message}</span>
            )}

            <button type="submit">Login</button>
          </form>
          <div className="register">
            <span>Já possui uma conta? </span>
            <Link to={"/login"}>Logar!</Link>
          </div>
        </div>
        <div className="container_image">
          <img src={complete} alt="*" />
        </div>
      </div>
    </ContainerRegister>
  );
};

export default Register;
