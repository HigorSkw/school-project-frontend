import { ContainerRegister } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { IClub, IGrade, ISubject } from "../../context/GlobalInterface";

export const RegisterComponent = (): JSX.Element => {
  const { createGrade, subjects, clubs, students } = useContext(GlobalContext);

  const [idSubject, setIdSubject] = useState<string>();
  const [selectedSubjects, setSelectedSubjects] = useState<ISubject[]>();

  const registerSchema = yup.object().shape({
    note: yup.string().required("Nota é obrigatório"),
    student: yup.string().required("Turno é obrigatório"),
    subject: yup.string().required("Matéria é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IGrade>({ resolver: yupResolver(registerSchema) });

  const filterSubjects = (data: IClub) => {
    let subjectsArr: ISubject[] = [];

    data.subjects.forEach((elem) => {
      subjects?.forEach((sub) => {
        if (sub.id === elem) {
          subjectsArr.push(sub);
        }
      });
    });

    return subjectsArr;
  };

  const selectClub = (id: string) => {
    setIdSubject(id);
    const selectClub = clubs?.find((elem) => elem.id === id);

    if (selectClub) {
      const clubFind = filterSubjects(selectClub);

      setSelectedSubjects(clubFind);
    }
  };

  return (
    <ContainerRegister>
      <div className="container_form">
        <form onSubmit={handleSubmit(createGrade)}>
          <h2>Nova Avaliação:</h2>
          <p>Selecione a turma:</p>
          <select
            id="club"
            onChange={(event) => selectClub(event.target.value)}
          >
            {clubs?.map((elem) => (
              <option value={elem.id} key={elem.id}>
                {elem.name}
              </option>
            ))}
          </select>

          {selectedSubjects?.length === 0 ? (
            <p>Por Favor, selecione a turma acima</p>
          ) : (
            <>
              <p>Selecione a matéria: </p>
              <select id="subject" {...register("subject")}>
                {selectedSubjects?.map((elem) => (
                  <option value={elem.id} key={elem.id}>
                    {elem.name}
                  </option>
                ))}
              </select>
            </>
          )}

          <p>Selecione o(a) aluno(a): </p>
          <select id="student" {...register("student")}>
            {students?.map((elem) => (
              <option value={elem.id} key={elem.id}>
                {elem.name}
              </option>
            ))}
          </select>

          <label htmlFor="note">Nota do aluno(a) :</label>
          <input
            placeholder="Digite a nota do aluno(a)"
            id="note"
            {...register("note")}
          />
          <span>{errors.note && errors.note.message}</span>

          <button type="submit">Registrar</button>
        </form>
      </div>
    </ContainerRegister>
  );
};
