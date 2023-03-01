import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { DivModal, DivInter, Divheader, FormEvent, Perrors } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";
import { IEditUser } from "../../context/GlobalInterface";

const schema = yup.object({
  name: yup.string(),
});

export const ModalEditUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditUser>({
    resolver: yupResolver(schema),
  });

  const { editUser, setEditUserModal, userEdit } = useContext(GlobalContext);

  return (
    <DivModal>
      <DivInter>
        <Divheader>
          <h2>Editar Usuario</h2>
          <button
            type="button"
            onClick={() => {
              setEditUserModal(false);
            }}
          >
            X
          </button>
        </Divheader>

        <FormEvent onSubmit={handleSubmit(editUser)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Nome!"
            {...register("name")}
          />
          <Perrors>{errors?.name?.message}</Perrors>

          <div className="div_btns">
            <button className="btn_confirm" type="submit">
              Editar
            </button>
            <button
              className="btn_cancel"
              onClick={() => setEditUserModal(false)}
            >
              Cancelar
            </button>
          </div>
        </FormEvent>
      </DivInter>
    </DivModal>
  );
};
