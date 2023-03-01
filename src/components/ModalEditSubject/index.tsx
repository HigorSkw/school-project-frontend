import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { DivModal, DivInter, Divheader, FormEvent, Perrors } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";
import { ISubjectCreate } from "../../context/GlobalInterface";

const schema = yup.object({
  name: yup.string(),
});

export const ModalEditSubject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubjectCreate>({
    resolver: yupResolver(schema),
  });

  const { editSubject, setEditSubjectModal, subject } =
    useContext(GlobalContext);

  return (
    <DivModal>
      <DivInter>
        <Divheader>
          <h2>Editar Matéria</h2>
          <button
            type="button"
            onClick={() => {
              setEditSubjectModal(false);
            }}
          >
            X
          </button>
        </Divheader>

        <FormEvent onSubmit={handleSubmit(editSubject)}>
          <label htmlFor="name">Nome da Matéria</label>
          <input
            type="text"
            id="name"
            placeholder="Nome!"
            {...register("name")}
          />
          <Perrors>{errors?.name?.message}</Perrors>

          <div className="div_btns">
            <button className="btn_confirm" type="submit">
              Atualizar
            </button>
            <button
              className="btn_cancel"
              onClick={() => setEditSubjectModal(false)}
            >
              Cancelar
            </button>
          </div>
        </FormEvent>
      </DivInter>
    </DivModal>
  );
};
