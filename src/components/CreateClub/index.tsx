import { ContainerRegister } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { IClub, IUserRegister } from "../../context/GlobalInterface";

export const RegisterComponent = (): JSX.Element => {
  const { createClub, subjects } = useContext(GlobalContext);

  const [idSubject, setIdSubject] = useState<string>();

  const registerSchema = yup.object().shape({
    name: yup.string().required("Name é obrigatório"),
    shift: yup.string().required("Turno é obrigatório"),
    year: yup.string().required("Ano é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClub>({ resolver: yupResolver(registerSchema) });

  const handleCreate = (data: IClub) => {
    if (idSubject) {
      data.subjects = [idSubject];
      createClub(data);
    }
  };

  return (
    <ContainerRegister>
      <div className="container_form">
        <form onSubmit={handleSubmit(handleCreate)}>
          <h2>Nova Classe:</h2>
          <p>Selecione o turno:</p>
          <select id="shift" {...register("shift")}>
            <option value="morning">Manhã</option>
            <option value="afternoon">Tarde</option>
            <option value="night">Noite</option>
          </select>

          <label htmlFor="name">Nome da Turma:</label>
          <input
            placeholder="Digite o nome da turma"
            id="name"
            {...register("name")}
          />
          <span>{errors.name && errors.name.message}</span>

          <label htmlFor="year">Ano/série:</label>
          <input
            placeholder="Digite o Ano/série"
            id="year"
            {...register("year")}
          />
          <span>{errors.year && errors.year.message}</span>
          <span>{errors.year && errors.subjects?.message}</span>

          <p>Selecione a matéria: </p>
          <select
            id="subject"
            onChange={(event) => setIdSubject(event.target.value)}
          >
            {subjects?.map((elem) => (
              <option value={elem.id} key={elem.id}>
                {elem.name}
              </option>
            ))}
          </select>

          <button type="submit">Registrar</button>
        </form>
      </div>
    </ContainerRegister>
  );
};
