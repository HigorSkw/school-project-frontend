import { ContainerRegister } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ISubject, ISubjectCreate, IUser } from "../../context/GlobalInterface";
import { Subject } from "react-hook-form/dist/utils/createSubject";

export const RegisterComponent = (): JSX.Element => {
  const { createSubjects, teachers, subjects } = useContext(GlobalContext);

  const teachersAvailable = teachers?.filter((teacher) => {
    return !subjects?.some((item) => item.teacher?.id === teacher.id);
  });

  const registerSchema = yup.object().shape({
    name: yup.string().required("Name é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubjectCreate>({ resolver: yupResolver(registerSchema) });

  return (
    <ContainerRegister>
      <div className="container_form">
        <form onSubmit={handleSubmit(createSubjects)}>
          <h2>Criação de Matéria</h2>
          {teachersAvailable?.length === 0 ? (
            <h3>Não há professores disponíveis no momento.</h3>
          ) : (
            <>
              <p>Professor(a) Responsável:</p>
              <select id="teacher" {...register("teacher")}>
                <option value="">Selecione um professor</option>
                {teachersAvailable?.map((elem) => (
                  <option value={elem.id} key={elem.id}>
                    {elem.name}
                  </option>
                ))}
              </select>
            </>
          )}

          {teachersAvailable?.length !== 0 && (
            <>
              <label htmlFor="name">Nome da Matéria:</label>
              <input
                placeholder="Digite o nome da máteria"
                id="name"
                {...register("name")}
              />
              <span>{errors.name && errors.name.message}</span>
              <button type="submit">Registrar</button>
            </>
          )}
        </form>
      </div>
    </ContainerRegister>
  );
};
