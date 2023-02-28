import { ContainerRegister } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { IUserRegister } from "../../context/GlobalInterface";

export const RegisterComponent = (): JSX.Element => {
  const { registerUserComponent } = useContext(GlobalContext);

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
      <div className="container_form">
        <form onSubmit={handleSubmit(registerUserComponent)}>
          <h2>Register Aluno</h2>
          <p>Tipo de Conta:</p>
          <select id="type_account" {...register("type_account")}>
            <option value="student">Estudante</option>
          </select>

          <label htmlFor="name">Name:</label>
          <input
            placeholder="Digite o nome do aluno(a)"
            id="name"
            {...register("name")}
          />
          <span>{errors.name && errors.name.message}</span>

          <label htmlFor="email">E-mail:</label>
          <input
            placeholder="Digite o E-mail"
            id="email"
            {...register("email")}
          />
          <span>{errors.email && errors.email.message}</span>

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            placeholder="Digite a senha"
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

          <button type="submit">Registrar</button>
        </form>
      </div>
    </ContainerRegister>
  );
};
