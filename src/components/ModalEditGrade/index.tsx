import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { DivModal, DivInter, Divheader, FormEvent, Perrors } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";
import { IGrade } from "../../context/GlobalInterface";

const schema = yup.object({
  note: yup.number(),
});

export const ModalEditGrade = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IGrade>({
    resolver: yupResolver(schema),
  });

  const { editGrade, setEditGradeModal, grade } = useContext(GlobalContext);

  return (
    <DivModal>
      <DivInter>
        <Divheader>
          <h2>Editar Matéria</h2>
          <button
            type="button"
            onClick={() => {
              setEditGradeModal(false);
            }}
          >
            X
          </button>
        </Divheader>

        <FormEvent onSubmit={handleSubmit(editGrade)}>
          <label htmlFor="note">{grade?.subject.name}</label>
          <input
            type="text"
            id="note"
            placeholder="Atualizar nota?!"
            {...register("note")}
          />
          <Perrors>{errors?.note?.message}</Perrors>

          <div className="div_btns">
            <button className="btn_confirm" type="submit">
              Atualizar
            </button>
            <button
              className="btn_cancel"
              onClick={() => setEditGradeModal(false)}
            >
              Cancelar
            </button>
          </div>
        </FormEvent>
      </DivInter>
    </DivModal>
  );
};
