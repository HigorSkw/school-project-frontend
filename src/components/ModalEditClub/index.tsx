import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { DivModal, DivInter, Divheader, FormEvent, Perrors } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";
import { IClub, IEditUser } from "../../context/GlobalInterface";

const schema = yup.object({
  name: yup.string(),
  shift: yup.string(),
  year: yup.string(),
});

export const ModalEditClub = () => {
  const [idSubject, setIdSubject] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClub>({
    resolver: yupResolver(schema),
  });

  const { editClubModal, setEditClubModal, subjects, editClub, club } =
    useContext(GlobalContext);

  const handleCreate = (data: IClub) => {
    if (idSubject) {
      data.subjects = [idSubject];
      editClub(data);
    }
    editClub(data);
  };

  return (
    <DivModal>
      <DivInter>
        <Divheader>
          <h2>Editar Classe</h2>
          <button
            type="button"
            onClick={() => {
              setEditClubModal(false);
            }}
          >
            X
          </button>
        </Divheader>

        <FormEvent onSubmit={handleSubmit(editClub)}>
          <select id="shift" {...register("shift")}>
            {club && <option value={club.shift}>Manter o turno</option>}

            <option value="morning">Manhã</option>
            <option value="afternoon">Tarde</option>
            <option value="night">Noite</option>
          </select>
          <label htmlFor="name">Nome da Turma:</label>
          <input
            defaultValue={club?.name}
            type="text"
            id="name"
            placeholder="Nome atualizado!"
            {...register("name")}
          />
          <Perrors>{errors?.name?.message}</Perrors>

          <label htmlFor="name">Ano/Série:</label>
          <input
            defaultValue={club?.year}
            type="text"
            id="year"
            placeholder="Qual a série ou ano?"
            {...register("year")}
          />
          <Perrors>{errors?.name?.message}</Perrors>

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

          <div className="div_btns">
            <button className="btn_confirm" type="submit">
              Editar
            </button>
            <button
              className="btn_cancel"
              onClick={() => setEditClubModal(false)}
            >
              Cancelar
            </button>
          </div>
        </FormEvent>
      </DivInter>
    </DivModal>
  );
};
